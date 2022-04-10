import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentCard } from '../ducument-order-card/document-order-card';
import { Users } from '../Users/users-log-in';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss']
})
export class ShippingFormComponent implements OnInit {

  constructor(private route : Router) { }


  ukljucen = false;
  user!:Users;
  kartice:DocumentCard[] = [];
  cijena:number = 0;
  purpose!:string;
  errPoruka:string = "";

  ngOnInit(): void {
    let user = sessionStorage.getItem('korisnik');
    this.user = JSON.parse(user || '{}');
    let kartice = localStorage.getItem('kartice');
    this.kartice = JSON.parse(kartice || '{}');
    for (const i of this.kartice) {
      this.cijena += i.cijena;
    }
  }

  remove(obj:any):void{
    this.cijena -= obj.cijena;
    for (let i=0;i < this.kartice.length;++i) {
      if(this.kartice[i].id === obj.id){
        this.kartice.splice(i,1);
        return;
      }
    }
  }
  
  turn():void{
    if(!this.provjera()){
      this.ukljucen = !this.ukljucen;
      return;
    }
    let printDiv = document.getElementById("print");
    if(printDiv !== null)
      {
        printDiv.style.display = "inline";
        let print = printDiv.innerHTML;
        let restore = document.body.innerHTML;
        document.body.innerHTML = print;
        window.print();
        document.body.innerHTML = restore;
      }
  }

  submit():void{
      this.route.navigate(['eCitizen/',this.user.username,'documents-order']);
  }

  provjera():boolean{
    if(this.kartice.length === 0){
      this.errPoruka = "You don't have any documents to order!";
      return false;
    } else if(this.purpose === undefined){
      this.errPoruka = "Please input the purpose for you documents!";
      return false;
    }
    return true;
  }

  iskljuci():void{
    this.ukljucen = !this.ukljucen;
  }

  writeDocuments():string{
    let str = "Ordered documets: ";
    if(this.kartice.length === 1){
      str += this.kartice[0].naziv;
      return str;
    } else{
      for (const i of this.kartice) {
        str+=i.naziv+",";
      }
    }
    return str + ".";
  }
}
