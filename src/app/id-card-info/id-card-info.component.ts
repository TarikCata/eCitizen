import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../Users/users-log-in';

@Component({
  selector: 'app-id-card-info',
  templateUrl: './id-card-info.component.html',
  styleUrls: ['./id-card-info.component.scss']
})
export class IdCardInfoComponent implements OnInit {
  
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
