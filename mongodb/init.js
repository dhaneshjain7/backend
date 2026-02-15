const mongoose=require("mongoose");
const Chat=require("./models/chat.js");

main()
  .then(()=>{
    console.log("connection successful");
  })
  .catch((err)=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats=[
    {
    from:"neha",
    to:"priya",
    msg:"send me your exam sheets",
    created_at:new Date()
    },
    {
        from:"amit",
        to:"alok",
        msg:"number khul ke bato bacho ko ",
        created_at:new Date()
    }, 
    {
        from:"darshil",
        to:"ajit",
        msg:"chutiya hai tu",
        created_at:new Date()
    },
    {
        from:"harshit",
        to:"arihant",
        msg:"1 kilo dudh dena",
        created_at:new Date()
    }
];

Chat.insertMany(allChats);