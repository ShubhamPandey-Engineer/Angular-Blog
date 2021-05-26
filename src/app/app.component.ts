import {Router, NavigationStart ,NavigationEnd} from '@angular/router';
import { Component } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'BlogApp';
  
  closeModal: string=""

  
    
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



  constructor(private route: Router,private modalService: NgbModal){
    console.log(this.route.events)
    
    this.route.events.subscribe((route:any)=>{
    
      if(route instanceof NavigationStart)
      {
      document.querySelector(".component-load")?.classList.toggle("move-component-loader")

      }
      if(route instanceof NavigationEnd)
      {
        document.querySelector(".component-load")?.classList.add("move-component-loader")

      }
    })

  }
  
}



