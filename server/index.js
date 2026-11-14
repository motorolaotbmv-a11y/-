const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());
const games=[
{id:'pixel',name:'Shattered Pixel Dungeon',genre:'Аркады',icon:'⚔️',description:'Пошаговая roguelike-игра с исследованием подземелий.',url:'https://f-droid.org/repo/com.shatteredpixel.shatteredpixeldungeon_922.apk',file:'shattered-pixel-dungeon.apk'},
{id:'mindustry',name:'Mindustry',genre:'Стратегии',icon:'🏭',description:'Строй базы и защищайся от волн противников.',url:'https://f-droid.org/repo/io.anuke.mindustry_1115.apk',file:'mindustry.apk'},
{id:'unciv',name:'Unciv',genre:'Стратегии',icon:'🌍',description:'Открытая пошаговая стратегия о развитии цивилизации.',url:'https://f-droid.org/repo/com.unciv.app_1281.apk',file:'unciv.apk'},
{id:'puzzles',name:'Simon Tatham’s Puzzles',genre:'Головоломки',icon:'🧩',description:'Набор логических головоломок без рекламы.',url:'https://f-droid.org/repo/name.boyle.chris.sgtpuzzles_149.apk',file:'puzzles.apk'}
];
app.get('/',(req,res)=>res.json({status:'online',name:'GAME IN GAME API'}));
app.get('/api/games',(req,res)=>res.json({games}));
const port=process.env.PORT||10000;
app.listen(port,'0.0.0.0',()=>console.log('GAME IN GAME API listening on '+port));
