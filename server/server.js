const express=require("express"),
bodyParser=require("body-parser"),
blogModel=require("./blogModels/blogmodel"),
cors=require("cors")
app=express()

app.use(cors())
app.use(function (req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
  next();
  });
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const router=require("./apirouting/routing")



//API's  route---------------
app.use("/api",router)


//listen to port
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});