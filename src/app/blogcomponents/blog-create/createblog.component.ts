import { Message } from './../../models/blogmodel';
import { CrudoperationService } from '../../blogservice/crudoperation.service';
import { IBlog } from '../../models/blogmodel';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import {checkName} from "../../CustomValidator/NameValidation.validator";
import { CommmonMethods } from 'src/app/blogservice/commonMethods';

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent implements OnInit {
  
  //status object
  alert:Message={
    status:false,
    message:""
  }


  constructor(private fb:FormBuilder,private crudService:CrudoperationService,private common:CommmonMethods) {
   }

   //blog object
  blogData:IBlog={
    title:"",
    category:"",
    content:"",
    createdBy:"shubham"  
  }



  ngOnInit() {

    

  }
 

  //binding form
  //using formGroup()
  /*
  createBlogForm=new FormGroup({
    blogTitle:new FormControl(''),
    blogCategory:new FormControl(''),
    blogContent:new FormControl('')

  })*/

  //using formBuilder
  createBlogForm=this.fb.group({
    title:["",[Validators.required,checkName]],
    category:["",Validators.required],
    content:["",[Validators.required,Validators.minLength(2)]]
  })



  //submit form
  createBlog()
  {
this.blogData=this.createBlogForm.value
this.crudService.create(this.blogData).subscribe((data=>{
  let jsObject=this.common.toObject(data)
  if(jsObject["status"])
  {
    this.alert.status=true
    this.alert.message="New blog created"
   this.createBlogForm.setValue({title:"",category:"",content:""})
  }
  setTimeout(()=>{
    this.alert.status=false
  },1500)
   

  
}))
  }


  //form Status(valid/invalid)
  formStatus()
  
  {
    return this.createBlogForm.invalid;
  }


  


  //all getters for formcontrol
  //get title control
  fC(controlName:string){
    return this.createBlogForm.get(controlName)
  }




}
