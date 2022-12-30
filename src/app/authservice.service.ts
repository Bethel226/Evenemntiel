import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  
  constructor() { }
  
  public loginuser(userData:any)
  {
    //get login user data
    userData.forEach((value:any,key:any) => {
      console.log(key+" "+value)
    });
    //
    
  }
}