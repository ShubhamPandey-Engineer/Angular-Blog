import { Message } from './../models/blogmodel';
import { CrudoperationService } from 'src/app/blogservice/crudoperation.service';
import { Component, Injectable, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-alert',
  templateUrl: './status-alert.component.html',
  styleUrls: ['./status-alert.component.css']
})


export class StatusAlertComponent implements OnInit {
 
 @Input() alert:Message={
   message:"",
   status:false
 }
  
 

  constructor() {
console.log(this.alert)
  }
  
  

  ngOnInit(): void {
  }

}
