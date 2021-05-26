import { Injectable } from "@angular/core";


export interface IBlog{
    _id?:string,
    title:string,
    category:string,
    content:string,
    createdBy:string
}

export interface Message{
    status:boolean,
    message:string
}

export interface DeleteBlog{
    id?:any,
    title:string
}
