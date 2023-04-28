const express = require('express')
const app = express()
const path = require("path")
const mysql2 =require ("mysql2")
const port = process.env.PORT || 8081
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(function (req,res,next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization,Content-Type, Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use('/static', express.static('public'))

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('home', {title: 'Касса - Касса автовокзала',page_name:'home', active: 'home'})
})
app.get('/work', (req, res) => {
  res.render('work', {title: 'Контакты',page_name:'work', active: 'work'})
})
app.get('/about', (req, res) => {
  res.render('about', {title: 'О нас',page_name:'about', active: 'about'})
})


const db = mysql2.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "root",
  database: "avtokassa",
  password: ""
});
const urlencodedParser = express.urlencoded({extended: false});

    
// получение списка пользователей
    app.get("/prigorod", function(req, res){
        db.query("SELECT * FROM prigorod", function(err, data) {
          if(err) return console.log(err);
          res.render("prigorod.hbs", {
              prigorod: data
          });
        });
    });

// возвращаем форму для добавления данных
app.get("/prigorodcreate", function(req, res){
    res.render("prigorodcreate.hbs");
});
// получаем отправленные данные и добавляем их в БД 
app.post("/prigorodcreate", urlencodedParser, function (req, res) {
         
    if(!req.body) return res.sendStatus(400);

    const p_o = req.body.p_o;
    const p_p = req.body.p_p;
    const time_o = req.body.time_o;
    const time_p = req.body.time_p;
    const count_m = req.body.count_m;
    const count_mo = req.body.count_mo;
    const price = req.body.price;
    const name_vod = req.body.name_vod;
    const gos_nomer = req.body.gos_nomer;
    db.query("INSERT INTO prigorod (p_o, p_p, time_o, time_p, count_m, count_mo, price, name_vod, gos_nomer) VALUES (?,?,?,?,?,?,?,?,?)", [p_o, p_p, time_o, time_p, count_m, count_mo, price, name_vod, gos_nomer], function(err, data) {
     if(err) return console.log(err);
    res.redirect("/prigorod");
    });
});
 
// получем id редактируемого пользователя, получаем его из бд и отправлям с формой редактирования
app.get("/prigorodedit/:id", function(req, res){
  const id = req.params.id;
  db.query("SELECT * FROM prigorod WHERE id=?", [id], function(err, data) {
    if(err) return console.log(err);
     res.render("prigorodedit.hbs", {
        prigorod: data[0]
    });
  });
});
// получем id просмотра пользователя
app.get("/prigorodshow/:id", function(req, res){
  const id = req.params.id;
  db.query("SELECT * FROM prigorod WHERE id=?", [id], function(err, data) {
    if(err) return console.log(err);
     res.render("prigorodshow.hbs", {
        prigorod: data[0]
    });
  });
});
// получаем отредактированные данные и отправляем их в БД
app.post("/prigorodedit", urlencodedParser, function (req, res) {
         
  if(!req.body) return res.sendStatus(400);
  const p_o = req.body.p_o;
  const p_p = req.body.p_p;
  const time_o = req.body.time_o;
  const time_p = req.body.time_p;
  const count_m = req.body.count_m;
  const count_mo = req.body.count_mo;
  const price = req.body.price;
  const name_vod = req.body.name_vod;
  const gos_nomer = req.body.gos_nomer;

  
  const id = req.body.id;
  
  db.query("UPDATE prigorod SET p_o=?, p_p=?, time_o=?, time_p=?, count_m=?, count_mo=?, price=?, name_vod=?, gos_nomer=? WHERE id=?", [ p_o, p_p, time_o, time_p, count_m, count_mo, price, name_vod, gos_nomer, id], function(err, data) {
    if(err) return console.log(err);
    res.redirect("/prigorod");
  });
});
 
// получаем id удаляемого пользователя и удаляем его из бд
app.post("/delete/:id", function(req, res){
          
  const id = req.params.id;
  db.query("DELETE FROM prigorod WHERE id=?", [id], function(err, data) {
    if(err) return console.log(err);
    res.redirect("/prigorod");
  });
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// получение списка пользователей
app.get("/mezgorod", function(req, res){
  db.query("SELECT * FROM mezgorod", function(err, data) {
    if(err) return console.log(err);
    res.render("mezgorod.hbs", {
        mezgorod: data
    });
  });
});

// возвращаем форму для добавления данных
app.get("/mezgorodcreate", function(req, res){
res.render("mezgorodcreate.hbs");
});
// получаем отправленные данные и добавляем их в БД 
app.post("/mezgorodcreate", urlencodedParser, function (req, res) {
   
if(!req.body) return res.sendStatus(400);

const p_o = req.body.p_o;
const p_p = req.body.p_p;
const time_o = req.body.time_o;
const time_p = req.body.time_p;
const count_m = req.body.count_m;
const count_mo = req.body.count_mo;
const price = req.body.price;
const name_vod = req.body.name_vod;
const gos_nomer = req.body.gos_nomer;
db.query("INSERT INTO mezgorod (p_o, p_p, time_o, time_p, count_m, count_mo, price, name_vod, gos_nomer) VALUES (?,?,?,?,?,?,?,?,?)", [p_o, p_p, time_o, time_p, count_m, count_mo, price, name_vod, gos_nomer], function(err, data) {
if(err) return console.log(err);
res.redirect("/mezgorod");
});
});

// получем id редактируемого пользователя, получаем его из бд и отправлям с формой редактирования
app.get("/mezgorodedit/:id", function(req, res){
const id = req.params.id;
db.query("SELECT * FROM mezgorod WHERE id=?", [id], function(err, data) {
if(err) return console.log(err);
res.render("mezgorodedit.hbs", {
  mezgorod: data[0]
});
});
});
// получем id просмотра пользователя
app.get("/mezgorodshow/:id", function(req, res){
  const id = req.params.id;
  db.query("SELECT * FROM mezgorod WHERE id=?", [id], function(err, data) {
    if(err) return console.log(err);
     res.render("mezgorodshow.hbs", {
        mezgorod: data[0]
    });
  });
});
// получаем отредактированные данные и отправляем их в БД
app.post("/mezgorodedit", urlencodedParser, function (req, res) {
   
if(!req.body) return res.sendStatus(400);
const p_o = req.body.p_o;
const p_p = req.body.p_p;
const time_o = req.body.time_o;
const time_p = req.body.time_p;
const count_m = req.body.count_m;
const count_mo = req.body.count_mo;
const price = req.body.price;
const name_vod = req.body.name_vod;
const gos_nomer = req.body.gos_nomer;


const id = req.body.id;

db.query("UPDATE mezgorod SET p_o=?, p_p=?, time_o=?, time_p=?, count_m=?, count_mo=?, price=?, name_vod=?, gos_nomer=? WHERE id=?", [ p_o, p_p, time_o, time_p, count_m, count_mo, price, name_vod, gos_nomer, id], function(err, data) {
if(err) return console.log(err);
res.redirect("/mezgorod");
});
});

// получаем id удаляемого пользователя и удаляем его из бд
app.post("/delete1/:id", function(req, res){
    
const id = req.params.id;
db.query("DELETE FROM mezgorod WHERE id=?", [id], function(err, data) {
if(err) return console.log(err);
res.redirect("/mezgorod");
});
});



const routes = require('./settings/routes')
routes(app)

app.listen(port, () => {
    console.log(`App listen on port ${port}`);
})