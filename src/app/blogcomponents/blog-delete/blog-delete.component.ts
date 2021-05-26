import { CommmonMethods } from 'src/app/blogservice/commonMethods';
import { CrudoperationService } from 'src/app/blogservice/crudoperation.service';
import { DeleteBlog, Message } from './../../models/blogmodel';
import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-blog-delete',
  templateUrl: './blog-delete.component.html',
  styleUrls: ['./blog-delete.component.css']
})
export class BlogDeleteComponent implements OnInit {
  closeModal: string="";
  message:string=""
  @Input()  deleteBlog:DeleteBlog={
    id:"",
    title:""
  }
  
  @Output()
  event: EventEmitter<string>=new EventEmitter();

  //status object
  alert:Message={
    status:false,
    message:""
  }


  constructor(private modalService: NgbModal,private crudService:CrudoperationService,private common:CommmonMethods) { 
  }

  
      
  triggerModal(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res:Event ) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    //console.log("dc",this.mess.getMessage())
  }


  //delete blog
  DeleteBlog()
  {  

this.crudService.deleteBlog(this.deleteBlog.id).subscribe((res)=>{
let status=this.common.toObject(res)["status"]
if(status)
{
  this.crudService.setMessage(this.deleteBlog.id,true)
  this.event.emit(this.deleteBlog.id)

  this.alert.status=true;
  this.alert.message="Blog deleted"
}

 })
}}

