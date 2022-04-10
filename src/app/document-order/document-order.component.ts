import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentCard } from '../ducument-order-card/document-order-card';
import { Users } from '../Users/users-log-in';

@Component({
  selector: 'app-document-order',
  templateUrl: './document-order.component.html',
  styleUrls: ['./document-order.component.scss']
})
export class DocumentOrderComponent implements OnInit {

  constructor(private route : Router) { }

  kartice:DocumentCard[] = [
    {
      id:31231,
      naziv:"Cips",
      cijena:1.,
    },
    {
      id:12321,
      naziv:"Vozacka",
      cijena:2.1,
    },
    {
      id:43212,
      naziv:"Pasos",
      cijena:1,
    },
    {
      id:231312,
      naziv:"Potvrda o prebivalistu",
      cijena:3.31,
    },
    {
      id:73462,
      naziv:"Stipendija",
      cijena:4.5,
    },
  ]


  naruceneKartice:DocumentCard[] = [];

  counter:number = 0;

  user!:Users;

  ngOnInit(): void {
    let user = sessionStorage.getItem('korisnik');
    this.user = JSON.parse(user || '{}');
  }
  
  ordered(obj:DocumentCard):void{
      this.naruceneKartice[this.counter] = obj;
  }

  count():void{
    this.counter++;
  }
  

  seeDetails():void{

    localStorage.setItem('kartice',JSON.stringify(this.naruceneKartice));
    this.route.navigate(['eCitizen/', this.user.username,'documents-order','shipping-form']);
  }

}
