import { IBlog, Message } from './../models/blogmodel';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from  "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class CrudoperationService {
  

public alertStatus:Message={
  message:"",
  status:false

} 

  setMessage(mess:string,status:boolean)
  {
this.alertStatus.status=status
this.alertStatus.message=mess
  }

  getMessage():Message{
return this.alertStatus
  }
//base url
public baseUrl="http://localhost:3000/api"

constructor(private http:HttpClient) {

}

//API's

//create blog
create(blog:IBlog):Observable<any>
{
return this.http.post(`${this.baseUrl}/create`,blog)
}

test(){
  return this.http.get(this.baseUrl)

}




//Get All blogs(With pagination)
getBlogs(n:number):Observable<any>
{
return this.http.get(`${this.baseUrl}/page/${n}`)
}

/*
//Get All blogs
getBlog():Observable<any>
{

return this.http.get(this.baseUrl)
}*/



//find one blog
findBlog(blogId:string):Observable<any>
{
return this.http.get(`${this.baseUrl}/${blogId}/detail`)
}




//update blo
updateBlog(blog:any):Observable<any>
{
return this.http.post(`${this.baseUrl}/${blog._id}/update`,blog)
}




//update blo
deleteBlog(blogId:string):Observable<any>
{
return this.http.delete(`${this.baseUrl}/${blogId}/delete`)
}



//return this.http.get("http://localhost:3000/test")
}

