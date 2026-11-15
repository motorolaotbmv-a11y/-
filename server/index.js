const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());
const games=[
  {
    "id": "aaaaxy",
    "name": "AAAAXY",
    "genre": "Приключения",
    "icon": "🌀",
    "description": "Нелинейный 2D платформер с необычными пространствами и секретами.",
    "url": "https://f-droid.org/repo/io.github.divverent.aaaaxy_107302184.apk",
    "file": "aaaaxy.apk",
    "source": "https://f-droid.org/en/packages/io.github.divverent.aaaaxy/"
  },
  {
    "id": "pipes",
    "name": "Pipes",
    "genre": "Головоломки",
    "icon": "🔵",
    "description": "Соединяй одинаковые цвета и заполняй игровое поле.",
    "url": "https://f-droid.org/repo/com.vayunmathur.games.pipes_20260718.apk",
    "file": "pipes.apk",
    "source": "https://f-droid.org/en/packages/com.vayunmathur.games.pipes/"
  },
  {
    "id": "unciv",
    "name": "Unciv",
    "genre": "Стратегии",
    "icon": "🌍",
    "description": "Открытая пошаговая стратегия о развитии цивилизации.",
    "url": "https://f-droid.org/repo/com.unciv.app_1281.apk",
    "file": "unciv.apk",
    "source": "https://f-droid.org/packages/com.unciv.app/"
  },
  {
    "id": "puzzles",
    "name": "Simon Tatham’s Puzzles",
    "genre": "Головоломки",
    "icon": "🧩",
    "description": "Большой набор логических головоломок.",
    "url": "https://f-droid.org/repo/name.boyle.chris.sgtpuzzles_149.apk",
    "file": "simon-puzzles.apk",
    "source": "https://f-droid.org/packages/name.boyle.chris.sgtpuzzles/"
  },
  {
    "id": "watersort",
    "name": "Water Sort",
    "genre": "Головоломки",
    "icon": "🧪",
    "description": "Сортируй цветную воду по пробиркам. Много уровней, без рекламы.",
    "url": "https://f-droid.org/repo/com.sidhant.watersort_102.apk",
    "file": "water-sort.apk",
    "source": "https://f-droid.org/en/packages/com.sidhant.watersort/"
  },
  {
    "id": "nonogram",
    "name": "Nonogram",
    "genre": "Головоломки",
    "icon": "🟦",
    "description": "Решай числовые головоломки и открывай пиксельные рисунки.",
    "url": "https://f-droid.org/repo/com.sidhant.nonogram_32.apk",
    "file": "nonogram.apk",
    "source": "https://f-droid.org/en/packages/com.sidhant.nonogram/"
  },
  {
    "id": "sudoku",
    "name": "Sudoku",
    "genre": "Головоломки",
    "icon": "🔢",
    "description": "Судоку с логическими уровнями сложности и подсказками.",
    "url": "https://f-droid.org/repo/com.likhithpraveenk.sudoku_52.apk",
    "file": "sudoku.apk",
    "source": "https://f-droid.org/en/packages/com.likhithpraveenk.sudoku/"
  },
  {
    "id": "mahjong",
    "name": "Mahjong Solitaire",
    "genre": "Головоломки",
    "icon": "🀄",
    "description": "Классическая головоломка с плитками, офлайн и без рекламы.",
    "url": "https://f-droid.org/repo/com.sidhant.mahjong_12.apk",
    "file": "mahjong-solitaire.apk",
    "source": "https://f-droid.org/en/packages/com.sidhant.mahjong/"
  },
  {
    "id": "queens",
    "name": "Queens",
    "genre": "Головоломки",
    "icon": "👑",
    "description": "Расставляй королев на сетке по правилам логической задачи.",
    "url": "https://f-droid.org/repo/com.sidhant.queens_52.apk",
    "file": "queens.apk",
    "source": "https://f-droid.org/en/packages/com.sidhant.queens/"
  },
  {
    "id": "flowit",
    "name": "Flowit — Block Puzzle",
    "genre": "Головоломки",
    "icon": "🟩",
    "description": "Заполняй клетки цветами в более чем 100 уровнях.",
    "url": "https://f-droid.org/repo/com.bytehamster.flowitgame_403.apk",
    "file": "flowit.apk",
    "source": "https://f-droid.org/en/packages/com.bytehamster.flowitgame/"
  },
  {
    "id": "huespill",
    "name": "Hue Spill",
    "genre": "Головоломки",
    "icon": "🎨",
    "description": "Заполни всё поле одним цветом за ограниченное число ходов.",
    "url": "https://f-droid.org/repo/com.sidhant.huespill_12.apk",
    "file": "hue-spill.apk",
    "source": "https://f-droid.org/en/packages/com.sidhant.huespill/"
  },
  {
    "id": "2048",
    "name": "2048 Open Fun Game",
    "genre": "Головоломки",
    "icon": "🔢",
    "description": "Соединяй одинаковые числа, играй с историей ходов и подсказками.",
    "url": "https://f-droid.org/repo/org.andstatus.game2048_47.apk",
    "file": "2048-open.apk",
    "source": "https://f-droid.org/en/packages/org.andstatus.game2048/"
  },
  {
    "id": "opensudoku",
    "name": "Open Sudoku",
    "genre": "Головоломки",
    "icon": "📘",
    "description": "Открытая игра судоку с темами, статистикой и подсказками.",
    "url": "https://f-droid.org/repo/org.moire.opensudoku_20260625.apk",
    "file": "open-sudoku.apk",
    "source": "https://f-droid.org/en/packages/org.moire.opensudoku/"
  },
  {
    "id": "roboyard",
    "name": "Roboyard",
    "genre": "Головоломки",
    "icon": "🤖",
    "description": "Проводи роботов к целям, продумывая последовательность ходов.",
    "url": "https://f-droid.org/repo/de.z11.roboyard_140.apk",
    "file": "roboyard.apk",
    "source": "https://f-droid.org/en/packages/de.z11.roboyard/"
  },
  {
    "id": "dropcount",
    "name": "DropCount",
    "genre": "Головоломки",
    "icon": "🔵",
    "description": "Числовая головоломка на поле 7×7 с цепочками комбинаций.",
    "url": "https://f-droid.org/repo/io.github.jdanders.dropcount_1.apk",
    "file": "dropcount.apk",
    "source": "https://f-droid.org/en/packages/io.github.jdanders.dropcount/"
  }
];
app.get('/',(req,res)=>res.json({status:'online',name:'GAME IN GAME API',games:games.length}));
app.get('/api/games',(req,res)=>res.json({games}));

const crypto = require('crypto');
const SUPABASE_URL = (process.env.SUPABASE_URL || '').replace(/\/+$/,'');
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const ADMIN_PASSWORD = process.env.GIG_ADMIN_PASSWORD || '';
const UNBAN_CODE = process.env.GIG_UNBAN_CODE || '';
const sessions = new Map();
const recentErrors = [];
const startedAt = Date.now();

function recordError(err) {
  recentErrors.unshift({time:new Date().toISOString(),message:String(err && err.message || err).slice(0,220)});
  if (recentErrors.length > 12) recentErrors.pop();
  console.error(err);
}
async function sb(path, options={}) {
  if (!SUPABASE_URL || !SUPABASE_KEY) throw new Error('Не настроен секретный ключ Supabase в переменных сервера');
  const response = await fetch(SUPABASE_URL + '/rest/v1/' + path, {
    ...options,
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: 'Bearer ' + SUPABASE_KEY,
      'Content-Type':'application/json',
      ...(options.headers || {})
    }
  });
  const body = await response.text();
  let data = null;
  try { data = body ? JSON.parse(body) : null; } catch { data = body; }
  if (!response.ok) {
    const message = data && (data.message || data.error || data.details) || ('Supabase HTTP ' + response.status);
    throw new Error(String(message));
  }
  return {data,headers:response.headers,status:response.status};
}
function adminOnly(req,res,next) {
  const token = String(req.headers.authorization || '').replace(/^Bearer\s+/i,'');
  const expiry = sessions.get(token);
  if (!token || !expiry || expiry < Date.now()) {
    sessions.delete(token);
    return res.status(401).json({error:'Нужен вход администратора'});
  }
  next();
}
async function audit(action,target,details={}) {
  try {
    await sb('admin_audit_log', {method:'POST',headers:{Prefer:'return=minimal'},body:JSON.stringify({action,target_player_id:target || null,details})});
  } catch (e) { recordError(e); }
}
async function findProfile(playerId) {
  const q = 'profiles?player_id=eq.' + encodeURIComponent(playerId) + '&select=id,player_id,display_name,coins,is_banned,ban_reason&limit=1';
  const r = await sb(q);
  return r.data && r.data[0];
}
app.get('/api/health', async (req,res) => {
  res.json({
    status:'online',
    name:'GAME IN GAME API',
    uptime:Math.floor(process.uptime()),
    memory:process.memoryUsage(),
    load:require('os').loadavg()[0],
    supabaseConfigured:!!(SUPABASE_URL && SUPABASE_KEY),
    adminConfigured:!!ADMIN_PASSWORD,
    recentErrors:recentErrors.slice(0,5)
  });
});
app.get('/api/games', async (req,res) => {
  try {
    if (SUPABASE_URL && SUPABASE_KEY) {
      const r = await sb('games?select=id,name,genre,icon,description,url,file,source,is_active&is_active=eq.true&order=name.asc');
      return res.json({games:r.data || [],source:'supabase'});
    }
    return res.json({games,source:'local'});
  } catch(e) { recordError(e); res.status(503).json({error:'Не удалось загрузить каталог',details:e.message}); }
});
app.post('/api/admin/login', (req,res) => {
  const supplied = String(req.body && req.body.password || '');
  if (!ADMIN_PASSWORD) return res.status(503).json({error:'Пароль администратора не настроен на сервере'});
  const a = Buffer.from(supplied);
  const b = Buffer.from(ADMIN_PASSWORD);
  if (a.length !== b.length || !crypto.timingSafeEqual(a,b)) {
    return res.status(401).json({error:'Неверный пароль'});
  }
  const token = crypto.randomBytes(32).toString('hex');
  sessions.set(token, Date.now() + 8*60*60*1000);
  res.json({token,expiresIn:28800});
});
app.post('/api/admin/logout', adminOnly, (req,res) => {
  const token = String(req.headers.authorization || '').replace(/^Bearer\s+/i,'');
  sessions.delete(token);
  res.json({ok:true});
});
app.get('/api/admin/stats', adminOnly, async (req,res) => {
  try {
    const [profiles,gamesCount,downloads,logs] = await Promise.all([
      sb('profiles?select=id',{method:'HEAD',headers:{Prefer:'count=exact'}}),
      sb('games?select=id&is_active=eq.true',{method:'HEAD',headers:{Prefer:'count=exact'}}),
      sb('downloads?select=id',{method:'HEAD',headers:{Prefer:'count=exact'}}),
      sb('admin_audit_log?select=id&order=created_at.desc&limit=8')
    ]);
    const count = h => Number((h.get('content-range') || '').split('/')[1] || 0);
    res.json({users:count(profiles.headers),games:count(gamesCount.headers),downloads:count(downloads.headers),logs:logs.data || []});
  } catch(e) { recordError(e); res.status(503).json({error:e.message}); }
});
app.post('/api/admin/gift', adminOnly, async (req,res) => {
  try {
    const playerId=String(req.body.playerId||'').trim();
    const gameId=String(req.body.gameId||'').trim();
    if (!playerId || !gameId) return res.status(400).json({error:'Укажи ID игрока и игру'});
    const profile=await findProfile(playerId);
    if (!profile) return res.status(404).json({error:'Игрок не найден'});
    await sb('user_library?on_conflict=user_id,game_id',{method:'POST',headers:{Prefer:'resolution=merge-duplicates,return=minimal'},body:JSON.stringify({user_id:profile.id,game_id:gameId,source:'gift',gifted_by:'admin'})});
    await audit('gift_game',playerId,{gameId});
    res.json({ok:true,message:'Игра добавлена в библиотеку игрока'});
  } catch(e) { recordError(e); res.status(400).json({error:e.message}); }
});
app.post('/api/admin/coins', adminOnly, async (req,res) => {
  try {
    const playerId=String(req.body.playerId||'').trim();
    const amount=Number(req.body.amount);
    if (!playerId || !Number.isSafeInteger(amount) || amount===0 || Math.abs(amount)>100000000) return res.status(400).json({error:'Проверь ID и количество монет'});
    const profile=await findProfile(playerId);
    if (!profile) return res.status(404).json({error:'Игрок не найден'});
    const next=Number(profile.coins)+amount;
    if (next<0) return res.status(400).json({error:'Баланс не может быть отрицательным'});
    await sb('profiles?id=eq.'+encodeURIComponent(profile.id),{method:'PATCH',headers:{Prefer:'return=minimal'},body:JSON.stringify({coins:next})});
    await audit('change_coins',playerId,{amount,balance:next});
    res.json({ok:true,balance:next});
  } catch(e) { recordError(e); res.status(400).json({error:e.message}); }
});
app.post('/api/admin/ban', adminOnly, async (req,res) => {
  try {
    const playerId=String(req.body.playerId||'').trim();
    const reason=String(req.body.reason||'Нарушение правил').slice(0,500);
    const profile=await findProfile(playerId);
    if (!profile) return res.status(404).json({error:'Игрок не найден'});
    await sb('profiles?id=eq.'+encodeURIComponent(profile.id),{method:'PATCH',headers:{Prefer:'return=minimal'},body:JSON.stringify({is_banned:true,ban_reason:reason,banned_at:new Date().toISOString()})});
    await audit('ban',playerId,{reason});
    res.json({ok:true});
  } catch(e) { recordError(e); res.status(400).json({error:e.message}); }
});
app.post('/api/admin/unban', adminOnly, async (req,res) => {
  try {
    if (!UNBAN_CODE || String(req.body.code||'') !== UNBAN_CODE) return res.status(403).json({error:'Неверный код разблокировки'});
    const playerId=String(req.body.playerId||'').trim();
    const profile=await findProfile(playerId);
    if (!profile) return res.status(404).json({error:'Игрок не найден'});
    await sb('profiles?id=eq.'+encodeURIComponent(profile.id),{method:'PATCH',headers:{Prefer:'return=minimal'},body:JSON.stringify({is_banned:false,ban_reason:null,banned_at:null})});
    await audit('unban',playerId,{});
    res.json({ok:true});
  } catch(e) { recordError(e); res.status(400).json({error:e.message}); }
});
app.post('/api/admin/announcement', adminOnly, async (req,res) => {
  try {
    const title=String(req.body.title||'Объявление').trim().slice(0,120);
    const message=String(req.body.message||'').trim().slice(0,2000);
    if (!message) return res.status(400).json({error:'Напиши сообщение'});
    await sb('notifications',{method:'POST',headers:{Prefer:'return=minimal'},body:JSON.stringify({recipient_id:null,title,message})});
    await audit('broadcast',null,{title,messageLength:message.length});
    res.json({ok:true});
  } catch(e) { recordError(e); res.status(400).json({error:e.message}); }
});
app.post('/api/admin/restart', adminOnly, (req,res) => {
  res.json({ok:true,message:'Сервер перезапускается'});
  setTimeout(()=>process.exit(0),250);
});
app.use((err,req,res,next)=>{recordError(err);res.status(500).json({error:'Внутренняя ошибка сервера'});});

const port=process.env.PORT||10000;
app.listen(port,'0.0.0.0',()=>console.log('GAME IN GAME API listening on '+port));
