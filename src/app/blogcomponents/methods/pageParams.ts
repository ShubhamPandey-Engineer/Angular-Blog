import { ParamMap,ActivatedRoute } from '@angular/router';


export class publicMethods{

    constructor(public route:ActivatedRoute){}
//get params
getParams(){
return this.route.paramMap
}
}
