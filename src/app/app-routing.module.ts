import { BlogDeleteComponent } from './blogcomponents/blog-delete/blog-delete.component';
import { UpdateBlogComponent } from './blogcomponents/update-blog/update-blog.component';
import { BlogDetailComponent } from './blogcomponents/blog-detail/blog-detail.component';

import { NgModule, Component } from '@angular/core';
import { NavigationStart, RouterModule, Routes } from '@angular/router';

//blog components
import { AllblogsComponent } from './blogcomponents/blog-all/allblogs.component'
import { CreateblogComponent} from './blogcomponents/blog-create/createblog.component';



//define routes here
export const routes: Routes = [
  {path:"create",component:CreateblogComponent},
  {path:"home",component:AllblogsComponent,pathMatch:"full"},
  {path:"blog/:id/detail",component:BlogDetailComponent},
  {path:"blog/:id/edit",component:UpdateBlogComponent},
  {path:"blog/:id/delete",component:BlogDeleteComponent},

    {path:"",component:AllblogsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }


