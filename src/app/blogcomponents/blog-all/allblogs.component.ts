import { CommmonMethods } from 'src/app/blogservice/commonMethods';
import { Message, DeleteBlog } from './../../models/blogmodel';
import { IBlog } from '../../models/blogmodel';
import { Component, OnInit } from '@angular/core';
import { CrudoperationService } from '../../blogservice/crudoperation.service';

@Component({
selector: 'app-allblogs',
templateUrl: './allblogs.component.html',
styleUrls: ['./allblogs.component.css']
})
export class AllblogsComponent implements OnInit {
public blogs: IBlog[] = [{
title: "", category: "", content: "", createdBy: ""
}]

public blogDelete: DeleteBlog = {
id: "",
title: ""
}

page={
prev:0,
next:2
}

real={
prev:0,
next:0
}


request: Message = {
status: true,
message: "Loading..."
}

public resultArr: IBlog[] = []


public searchTitle: string = ""



constructor(private blogService: CrudoperationService, private common: CommmonMethods) {

}

ngOnInit(): void {

this.blogs = []
// this.allBlogs()

//get blogs
this.displayBlogs(1)
}



//     Class Methods 


//Display blogs
displayBlogs(find:number)
{

this.blogService.getBlogs(find).subscribe((data:any)=>{
let jsObject = this.common.toObject(data)

this.page.next=jsObject["next"]["page"] 
this.page.prev=jsObject["pre"]["page"]
console.log(this.page.prev,this.page.next)
if (jsObject["data"].length == 0) {
this.request.message = "No Blogs"
}
else {
this.request.status = false

}
if (!jsObject["status"]) {
this.request.message = "."
}
this.resultArr = jsObject["data"]
this.blogs = jsObject["data"]




})

}



/*
//get all blogs
allBlogs() {
this.blogService.getBlogs(1).subscribe((data: any) => {
let jsObject = this.common.toObject(data)
if (jsObject["data"].length == 0) {
this.request.message = "No Blogs"
}
else {
this.request.status = false

}
if (!jsObject["status"]) {
this.request.message = "."
}
this.resultArr = jsObject["data"]
this.blogs = jsObject["data"]

})

}
*/
//track function
trackByFunc(item:any)
{
return item
}



//search filter
searchBlog(input: Event) {
if (this.searchTitle == "") {
//  this.allBlogs()
this.displayBlogs(1)

}
else {
this.request.status=false;
this.request.message = "Loading"
this.blogs = this.resultArr.filter((blog) => {
return blog.title.replace(/\s+/g, '').toLowerCase().includes(this.searchTitle.replace(/\s+/g, '').toLowerCase()) || blog.category.includes(this.searchTitle)

})
if (this.blogs.length == 0) {
this.request.status = true
this.request.message = "Not found!!"

}

}

}



//delete a blog
deleteBlog(blog: any) {
const blogId = blog.getAttribute("id")
const blogTitle = blog.getAttribute("title")
let index = this.blogs.findIndex((blog) => {
return blog._id == blogId
})
this.blogDelete.id = blogId
this.blogDelete.title = blogTitle
}


//receive  Deleted blog Id
receiveData(event: any) {
const index = this.blogs.findIndex((blog) => {
return blog._id == event
})

//check blog length
if (this.blogs.length == 1) {
this.request.status=true
this.request.message = "No Blogs."
}
this.blogs.splice(index, 1)
this.displayBlogs(1)
}




//Page refresh
pageRefresh()
{
    document.location.reload()
}
}



