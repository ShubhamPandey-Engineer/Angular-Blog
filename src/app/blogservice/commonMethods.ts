import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
    })
export class CommmonMethods{
 

//json to Object
toObject(json:string):any{
return JSON.parse(json)
}
}