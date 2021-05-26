const express=require("express")
const router=express.Router();
//import blogs/ controller
var operation=require("./controller")

//Home Route -GET
router.route("/page/:page")
.get(operation.getBlogs)

/*
//Home Route -GET
router.route("/")
.get(operation.getBlog)*/


//Create Route-POST
router.route("/create")
.post(operation.createBlog)


//Detail Route-GET
router.route("/:id/detail")
.get(operation.findBlog)



//Update Route-POST
router.route("/:id/update")
.post(operation.updateBlog)





//UDelete Route-POST
router.route("/:id/delete")
.delete(operation.deleteBlog)




module.exports=router
