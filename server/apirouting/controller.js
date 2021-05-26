var express=require("express"),
restify=require("restify")
app=express(),


//importing object schema and model
blogModel=require("../blogModels/blogmodel")




const { json } = require("body-parser");
var bodyParser=require("body-parser");


//connect to DB
var connectDB=require("../connectDB");
const blogmodel = require("../blogModels/blogmodel");
connectDB()
app.use(express.urlencoded({extended:false})) // this will parse Content-Type: application/json 
app.use(express.json())
app.use(bodyParser.json())

//response object
const response={
    status:false,
    data:{}
}


//pagination

var getBlogs=async (req,res)=>{  
  let result={
    pre:{
      page:0
    },
    next:{
      page:0
    }
  }
page=parseInt(req.params.page)
let last=page*2

var l=0
function length(){
blogModel.find().then((data)=>{
  if(last<data.length)
  {
  result.next={
  page:page+1
  }
  }
  })

}

length()
blogModel.find().exec((err,blogs)=>{
  var result={
    pre:{
      page:0
    },
    next:{
      page:0
    }
  }
//if returning documents <size
if(last<blogs.length)
{
result.next={
page:page+1
}
}
})



//documents to skip
let skip=(page-1)*2
if(skip>0)
{
result.pre={
page:page-1
}

}
result["data"]=await blogModel.find().limit(2).skip(skip)
result["status"]=true

res.json(JSON.stringify(result))



}



//HomePage middleware

var getBlog= async (req,res)=>
{
try{
await blogModel.find({},(err,blogs)=>{
if(blogs){
response.status=true
response.data=blogs
res.json(JSON.stringify(response))
}
else{
res.send(JSON.stringify({"data":[]}))
}

})
}
catch(err){

}
}


//create blog
var createBlog=async (req,res)=>{
console.log("server")

var {title,category,content}=req.body  
console.log(title)
blogModel.create(
{
title:title,
category:category,
content:content,
createdBy:"Shubham"
},(err,blog)=>{
if(err)
{
    response.status=false
    console.log(err)
  //  res.json(JSON.stringify(response))
}
else{
    response.status=true
    res.json(JSON.stringify(response))
}
})

}



//find Blog middleware
var findBlog=async (req,res)=>{
const blogId=req.params.id
try {
await  blogModel.findOne({
_id:blogId
},(err,blog)=>{
if(!err){
    response.status=true;
    response.data=blog
res.json(JSON.stringify(response))
}
else{   
res.send(JSON.stringify({"error":"no blog found"}))
}
})   

} catch (error) {
console.log(error)
}
}




//update Route -POST
var updateBlog=async (req,res)=>{
    let {title,category,content}=req.body  
blogModel.updateOne(
{

title:title,
category:category,
content:content,
createdBy:"Shubham"
},(err,blog)=>{
if(err)
{
console.log(err)
res.json(JSON.stringify(response))
}
else{
console.log("data updated")
response.status=true;
response.data=blog
res.json(JSON.stringify(response))
}
})

}

var deleteBlog=async (req,res)=>{
    const blogId=req.params.id
    try {
    await  blogModel.deleteOne({
    _id:blogId
    },(err,blog)=>{
    if(!err){
        response.status=true;
    res.json(JSON.stringify(response))
    }
    else{   
    res.send(JSON.stringify({"error":"blog not deleted"}))
    }
    })   
    
    } catch (error) {
    console.log(error)
    }
    }


    
    
    

module.exports={getBlogs,createBlog,findBlog,updateBlog,deleteBlog}
