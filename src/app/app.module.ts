import { HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routes } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import { AppComponent } from './app.component';
import { CreateblogComponent } from './blogcomponents/blog-create/createblog.component';
import { AllblogsComponent } from './blogcomponents/blog-all/allblogs.component';
import {HttpClientModule} from "@angular/common/http"

//import material module
//import { MaterialModuleModule } from './material-module/material-module.module';
import { SearchBlogComponent } from './blogcomponents/search-blog/search-blog.component';
import { BlogDetailComponent } from './blogcomponents/blog-detail/blog-detail.component';
import { UpdateBlogComponent } from './blogcomponents/update-blog/update-blog.component';
import { StatusAlertComponent } from './status-alert/status-alert.component';
import { BlogDeleteComponent } from './blogcomponents/blog-delete/blog-delete.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



let d=new AppRoutingModule()
@NgModule({
  declarations: [
    AppComponent,
    CreateblogComponent,
    AllblogsComponent,
    SearchBlogComponent,
    BlogDetailComponent,
    UpdateBlogComponent,
    StatusAlertComponent,
    BlogDeleteComponent,
      ],
  imports: [
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule 
  //  RouterModule.forRoot(routes,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



 }
