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
const port=process.env.PORT||10000;
app.listen(port,'0.0.0.0',()=>console.log('GAME IN GAME API listening on '+port));
