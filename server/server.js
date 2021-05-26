const express=require("express"),
bodyParser=require("body-parser"),
blogModel=require("./blogModels/blogmodel"),
cors=require("cors")
app=express()

var corsOptions = {
  origin: "http://localhost:3000/"
};

 
  app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const router=require("./apirouting/routing")



//API's  route---------------
app.use("/api",router)


//listen to port
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});