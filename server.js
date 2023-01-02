const express = require("express");
const expressSession = require("express-session");
const routes = require("./router");


const app = express();
app.get('/',funcion(req,res)){
    res.send("hello world");
    res.end();
}


const PORT = 7000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var sessionMiddlware = expressSession({
  secret: "cart",
  saveUninitialized: true,
  cookie: { maxAge: oneDay },
  resave: false,
});
app.use(sessionMiddlware);

routes(app);
app.listen(PORT, () => {
  console.log(`App Server is Listening on Port ${PORT}`);
});