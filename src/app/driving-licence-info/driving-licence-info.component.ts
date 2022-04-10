import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../Users/users-log-in';

@Component({
  selector: 'app-driving-licence-info',
  templateUrl: './driving-licence-info.component.html',
  styleUrls: ['./driving-licence-info.component.scss']
})
export class DrivingLicenceInfoComponent implements OnInit {

  user:Users = new Users;
  
  constructor(private route : Router) { }

  ngOnInit(): void {
    let u = sessionStorage.getItem('korisnik');
    this.user = JSON.parse(u || '{}');
    if(JSON.stringify(this.user) === '{}'){
        this.route.navigate(['404']);
    }
  }

  redirect(str:string):void{
    this.route.navigate(['eCitizen',this.user.username,str,'qr-code'])
  }

}
