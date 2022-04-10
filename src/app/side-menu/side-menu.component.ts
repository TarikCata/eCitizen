import { Component , ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { InteractionService } from '../interaction.service';
import { Users } from '../Users/users-log-in';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  
  constructor(
    private interaction: InteractionService,
    private route : Router) 
    {}

    user:Users = new Users;
    firstLoad:boolean = true;
    
    ngOnInit(): void {
        let u = sessionStorage.getItem('korisnik');
        this.user = JSON.parse(u || '{}');
        if(JSON.stringify(this.user) === '{}'){
          this.route.navigate(['404']);
        }
      }

  redirect(direction:string):void{
    if (direction === '') {
      this.route.navigate(['eCitizen/' , this.user.username]);
    }else{
      this.route.navigate(['eCitizen/', this.user.username, direction])
    }
  }

  removeStorage():void{
    sessionStorage.removeItem('korisnik');
    localStorage.removeItem('korisnik');
    localStorage.clear();
    sessionStorage.clear();
  }
  countdownDate = new Date("october 1, 2022 00:00:00").getTime();
  demo:any;
  x = setInterval(() => {
    var now = new Date().getTime();
    var distance = this.countdownDate - now;
    var days = Math.floor(distance/(1000*60*60*25));
    var hours = Math.floor((distance % ((1000*60*60*24))) / (1000 *60*60));
    var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    var seconds = Math.floor((distance % (1000*60)) / 1000);
    this.demo = days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds ";
  })
}
