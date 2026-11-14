package com.gameingame.catalog;

import android.app.Activity;
import android.app.DownloadManager;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.database.Cursor;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.provider.Settings;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

public class MainActivity extends Activity {
    private WebView web;
    private DownloadManager dm;
    private long activeDownload = -1L;
    private final BroadcastReceiver receiver = new BroadcastReceiver() {
        @Override public void onReceive(Context context, Intent intent) {
            if (DownloadManager.ACTION_DOWNLOAD_COMPLETE.equals(intent.getAction())) {
                long id = intent.getLongExtra(DownloadManager.EXTRA_DOWNLOAD_ID, -1);
                if (id != activeDownload) return;
                DownloadManager.Query q = new DownloadManager.Query().setFilterById(id);
                try (Cursor c = dm.query(q)) {
                    if (c != null && c.moveToFirst()) {
                        int status = c.getInt(c.getColumnIndexOrThrow(DownloadManager.COLUMN_STATUS));
                        if (status == DownloadManager.STATUS_SUCCESSFUL) {
                            Uri apk = dm.getUriForDownloadedFile(id);
                            runOnUiThread(() -> {
                                callJs("downloadFinished", "Загрузка завершена");
                                installApk(apk);
                            });
                        } else {
                            callJs("downloadFailed", "Не удалось скачать APK");
                            toast("Ошибка загрузки APK");
                        }
                    }
                }
            }
        }
    };

    @Override public void onCreate(Bundle state) {
        super.onCreate(state);
        dm = (DownloadManager) getSystemService(DOWNLOAD_SERVICE);
        web = new WebView(this);
        web.getSettings().setJavaScriptEnabled(true);
        web.getSettings().setDomStorageEnabled(true);
        web.getSettings().setAllowFileAccess(true);
        web.setWebChromeClient(new WebChromeClient());
        web.setWebViewClient(new WebViewClient());
        web.addJavascriptInterface(new Bridge(), "Android");
        setContentView(web);
        IntentFilter filter = new IntentFilter(DownloadManager.ACTION_DOWNLOAD_COMPLETE);
        if (Build.VERSION.SDK_INT >= 33) registerReceiver(receiver, filter, Context.RECEIVER_NOT_EXPORTED);
        else registerReceiver(receiver, filter);
        web.loadUrl("file:///android_asset/index.html");
    }

    private class Bridge {
        @JavascriptInterface public void download(String url, String filename) {
            runOnUiThread(() -> startDownload(url, filename));
        }
        @JavascriptInterface public void toast(String message) {
            runOnUiThread(() -> MainActivity.this.toast(message));
        }
    }

    private void startDownload(String url, String filename) {
        try {
            if (url == null || !url.startsWith("https://")) {
                toast("Разрешены только HTTPS-ссылки");
                return;
            }
            DownloadManager.Request req = new DownloadManager.Request(Uri.parse(url));
            req.setTitle(filename == null ? "GAME IN GAME" : filename);
            req.setDescription("Загрузка APK");
            req.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);
            req.setAllowedOverMetered(true);
            req.setAllowedOverRoaming(false);
            req.setDestinationInExternalFilesDir(this, Environment.DIRECTORY_DOWNLOADS,
                    (filename == null ? "game.apk" : filename.replaceAll("[^a-zA-Z0-9._-]", "_")));
            activeDownload = dm.enqueue(req);
            callJs("downloadStarted", "Загрузка началась");
            toast("Загрузка началась");
        } catch (Exception e) {
            callJs("downloadFailed", "Ошибка: " + e.getMessage());
            toast("Не удалось начать загрузку");
        }
    }

    private void installApk(Uri apk) {
        if (apk == null) { toast("Файл не найден"); return; }
        if (Build.VERSION.SDK_INT >= 26 && !getPackageManager().canRequestPackageInstalls()) {
            Intent settings = new Intent(Settings.ACTION_MANAGE_UNKNOWN_APP_SOURCES,
                    Uri.parse("package:" + getPackageName()));
            startActivity(settings);
            toast("Разреши установку для GAME IN GAME, затем нажми «Установить» ещё раз в загрузках");
            return;
        }
        Intent install = new Intent(Intent.ACTION_VIEW);
        install.setDataAndType(apk, "application/vnd.android.package-archive");
        install.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_GRANT_READ_URI_PERMISSION);
        try { startActivity(install); }
        catch (Exception e) { toast("Android не смог открыть установщик"); }
    }

    private void callJs(String fn, String value) {
        if (web != null) web.post(() -> web.evaluateJavascript(
                "window." + fn + "(" + org.json.JSONObject.quote(value) + ")", null));
    }
    private void toast(String s) { Toast.makeText(this, s, Toast.LENGTH_LONG).show(); }

    @Override public void onBackPressed() {
        if (web != null && web.canGoBack()) web.goBack(); else super.onBackPressed();
    }
    @Override protected void onDestroy() {
        try { unregisterReceiver(receiver); } catch (Exception ignored) {}
        if (web != null) web.destroy();
        super.onDestroy();
    }
}
