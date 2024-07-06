const express= require("express");
const {connectToMongoDB} = require("./connect");
const path = require('path');
const cookieParser = require('cookie-parser');
const {restrictToLoggedinUserOnly,checkAuth} = require('./midddlewares/auth')
const URL = require("./models/url");

const staticRoute = require('./routes/staticRouter');
const urlRoute = require("./routes/url");
const userRoute = require('./routes/user')

const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://127.0.0.1:27017/short-url')
.then(()=> console.log('MongoDB connected'))

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());


app.use("/url",restrictToLoggedinUserOnly, urlRoute);
app.use("/user",userRoute);
app.use("/",checkAuth, staticRoute);

// app.get("/test", async(req, res)=>{
//     const allUrls = await URL.find({});
//      res.render('home',{urls:allUrls,});
// })
app.get("/ipadd", function (req, res) {
    console.log(req.socket.remoteAddress);
    console.log(req.ip);
    res.send("your IP is: " + req.ip);
  });
app.get('/url/:shortId',async(req,res)=>{
const shortId = req.params.shortId;
const userIP = req.ip;
console.log(req.ip);
const entry = await URL.findOneAndUpdate({
    shortId,},
{
    $push:{
        visitHistory:{ timestamp : Date.now(), ip: userIP,},},

}
);
res.redirect(entry.redirectURL);
});

app.listen(PORT, ()=> console.log(`Server is running at port ${PORT}`))