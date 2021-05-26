import { CrudoperationService } from '../../blogservice/crudoperation.service';
import { IBlog } from '../../models/blogmodel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { CommmonMethods } from 'src/app/blogservice/commonMethods';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  //blog obj
  public blog:IBlog={title:"",category:"",content:"",createdBy:""}
  public dataReceived=false

  public blogStatus="Loading"

  constructor(private currentRoute:ActivatedRoute,private service:CrudoperationService,private common:CommmonMethods) {
   }

  ngOnInit(): void {
    //get blog id
    this.currentRoute.paramMap.subscribe((params:Params)=>{
      let blogId=params.params.id
     this.blogDetail(blogId)


    })
  }


  //get blog detail
  blogDetail(blogId:string)
  {
    let blog=this.service.findBlog(blogId)
    blog.subscribe((data:any)=>{
      //convert to json to object
     // let jsObject=this.toObject(data)
     let jsObject=this.common.toObject(data)
     this.dataReceived=jsObject["status"]
      this.blog=jsObject["data"]
      this.blogStatus=""
    })

  }


  //to object
  toObject(json:string)
  {
return JSON.parse(json)
  }
  


  

}
