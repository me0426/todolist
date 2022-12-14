const express=require("express");
const bodyParser= require('body-parser')
//const ejs= require('ejs');
const app=express();
let items=["go to GYM", "read"];
let workItems=[];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));
 

app.get("/", function(req, res){
   
var today = new Date();
var options={
    weekday:"long",
    day:"numeric",
    month:"long"
};

var day = today.toLocaleDateString("en-US", options);

res.render("list", {listTitle: day, newListItems: items});
   
   });
 
   app.post("/", function(req,res){
    let item = req.body.newitem;
    if(req.body.button==="work"){
        workItems.push(item);
        res.redirect("/work")
    } 
    else{
        items.push(item);
        res.redirect("/")
    }
     
res.redirect("/");
   })
  
   app.get("/work", function(req,res){
    res.render("list", {listTitle:"work list", newListItems: workItems})
   })
//    app.post("/work", function(req, res){
    

//    })
   app.get("/about", function(req, res){
    res.render("about");
   })
app.listen(5000, function(){
    console.log("server conneced to server 3000");
});