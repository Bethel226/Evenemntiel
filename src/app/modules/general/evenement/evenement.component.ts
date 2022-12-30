import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit{
  evenement:any;
  constructor(private http:HttpClient){

  }
  ngOnInit(){
   this.http.get("").subscribe((ev:any)=>{
    this.evenement=ev;
   })
  }

}
