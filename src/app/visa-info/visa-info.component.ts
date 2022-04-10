import { supportsPassiveEventListeners } from '@angular/cdk/platform';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visa-info',
  templateUrl: './visa-info.component.html',
  styleUrls: ['./visa-info.component.scss']
})
export class VisaInfoComponent implements OnInit {

  constructor(private httpClient : HttpClient) { }


  selectedName!:string;
  seletctedPic!:string;
  click!:boolean;
  countrySelected!:boolean;

  countries:any[] = [];
  sort() {
    this.countries.sort((a, b) => a.name.common.localeCompare(b.name.common))
  }
  ngOnInit(): void {
    this.httpClient.get<any>('https://restcountries.com/v3.1/all')
    .subscribe((data) => {
      for (const i of data) {
        this.countries.push(i);
      }
      this.sort();
    })
  }
  setClick():void{
    this.click=!this.click;
    let cI = document.getElementById("countryItems");
    if(this.click){
      if(cI!==null){
        cI.style.display = "inline";
      }
    } else{
      if(cI!==null){
        cI.style.display = "none";
      }
    }   
  }

  selectCountry(obj:any):void{
    this.countrySelected = true;
    this.setClick();
    console.log(obj.name.common);
    this.selectedName = obj.name.common;
    this.seletctedPic = obj.flags.png;
    
  }


}
