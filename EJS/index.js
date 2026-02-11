const express=require("express");
const app =express();
const path =require("path");

const port =8080;

//static files
app.use(express.static("public"));
//app.use(express.static(path.join(__dirname,"/public")));
//for extra css and js
app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.static(path.join(__dirname,"/public/css")));
app.set("view engine","ejs");

app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");     //.ejs nahi likhe toh bhi error nahi ata
});

app.get("hello",(req,res)=>{
    res.send("hello!");
});

app.get("/rolldice",(req,res)=>{
    let diceVal = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceVal});
});


/*

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    res.render("instagram.ejs",{username});
});
*/

//loops
/*
app.get("/ig/:username",(req,res)=>{
    const followers=["adam","bob","steve","abc"];
    let {username}=req.params;
    res.render("instagram.ejs",{username,followers});
});
*/


//insta page with EJS
app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instaData=require("./data.json");
    const data=instaData[username];
    console.log(data);
    res.render("instagram.ejs",{data});
});

app.listen(port,()=>{  
    console.log(`listening on port ${port}`);
});
