const express = require("express");
const app = express();
console.dir(app);


const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});
//will return hello world on brouser if we type localhost:3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

/*
const port=8080;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});
*/

/*
app.use((req,res)=>{
    //console.log(req);
    console.log("request recevied");
    res.send("this is a basic response");
    res.send({
        name:"apple",
        color:"red",
        
    });
});
*/

app.get("/apple", (req,res) =>{
     res.send({
        name:"apple",
        color:"red",
        
    });
});
/*
app.get("/",(req,res)=>{
    res.send("you connected root path");
});

app.get("/apple",(req,res)=>{
    res.send("you contacted apple path")
});

app.get("/orange",(req,res)=>{
    res.end("you contacted orange path");
});

app.get("*",(req,res)=>{
    res.send("this path does not exixt");
});

app.post("/",(req,res)=>{
    res.send("you sent a post request");
});

*/


//path parameter
app.get("/",(req,res)=>{
    res.send("hello, i am root");
});


app.get("/:username",(req,res)=>{
    console.log(req.params);  
    res.send("you connected root path");
});

app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send("no results");
});

