const express = require('express');
const app=express();
const port=3000;
const path = require('path');
const hbs = require('hbs');
const Filename=path.join(__dirname+"/src");
const folder1=path.join(__dirname+"/partials");

app.use(express.static(Filename));
app.set("view engine","hbs");
hbs.registerPartials(folder1);

app.get("/",(req,res)=>{
    res.render('index');
    
});

app.get("/I_need_a_website",(req,res)=>{
   res.render('form2');
});
app.get("/about",(req,res)=>{
    res.render("about");
    
});
app.get("/services",(req,res)=>{
  res.render('services')
});
app.get('/heiring',(req,res)=>{
    res.render("header");
  console.log("prateek");
});










app.listen(port,()=>{
    console.log(`Server is running ${port}`);
})