import { IBlog, Message } from './../../models/blogmodel';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CrudoperationService } from 'src/app/blogservice/crudoperation.service';
import { checkName } from 'src/app/CustomValidator/NameValidation.validator';
import { CommmonMethods } from 'src/app/blogservice/commonMethods';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit {
public blogId=""
 public  blogData:IBlog={
    title:"",
    category:"",
    content:"",
    createdBy:"shubham"  ,
    _id:""
  }

  //status object
  alert:Message={
    status:false,
    message:""
  }
  public requestPending:boolean=true;
  blogStatusAlert=document.querySelector(".blog-status")

  


 

  constructor(private fb:FormBuilder,private crudService:CrudoperationService,private currentRoute:ActivatedRoute,private common:CommmonMethods) {
    this.currentRoute.paramMap.subscribe((params:Params)=>{
      this.blogId=params.params.id
      
    })


  }
  

//prefill the form
fillForm():any{
  let blog= this.crudService.findBlog(this.blogId)
  blog.subscribe((data:any)=>{
 let jsObject=this.common.toObject(data)
this.blogData=jsObject["data"]
 this.updateBlogForm.setValue({title:this.blogData.title,category:this.blogData.category,content:this.blogData.content,_id:this.blogId})
  })
 
 }

 //fill userdata
  ngOnInit() {
    this.fillForm()
  }
  
//using formBuilder
updateBlogForm=this.fb.group({
  title:["",[Validators.required,checkName]],
  category:["",Validators.required],
  content:["",[Validators.required,Validators.minLength(2)]],
  _id:[this.blogId]
})







 //binding form
 //using formGroup()
 /*
 createBlogForm=new FormGroup({
   blogTitle:new FormControl(''),
   blogCategory:new FormControl(''),
   blogContent:new FormControl('')

 })*/

 

//get formControl 
fC(controlName:string)
{
  return this.updateBlogForm.get(controlName)
}


//form Status
formStatus(){
  return this.updateBlogForm.invalid
}


//submit the form
updateBlog()
{
  this.requestPending=false
let subs=this.crudService.updateBlog(this.updateBlogForm.value)
subs.subscribe((data:any)=>{
  let jsObject=this.common.toObject(data)
 if(jsObject["status"])
 {
  this.requestPending=true
   this.alert.message="Blog Updated !!!"
this.alert.status=true
setTimeout(()=>{
  this.alert.status=false
},1500)
 }
})
}



 }
