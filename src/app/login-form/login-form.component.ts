import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InteractionService } from '../interaction.service';
import { Users } from '../Users/users-log-in';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  constructor(private route : Router,
    private interaction: InteractionService)
     { }

    public users:Users[] = [];
    

    JMBG!:number;
    username:string = "";
    password:string = "";
    userFound:boolean = false;
    errPoruka:string = "Can't find acc";
    
    ngOnInit(): void {
      
      this.users[0] = Users.makeUser(
        12432423,"adokismetovic","adokismetovic","Adnan","Kismetovic","Buzim",
          "https://i.ibb.co/2gNtzLk/ado.png"
      );
      this.users[1] = Users.makeUser(
        54354324,"tarikcata","tarikcata","Tarik","Catovic","Vares"
        ,"https://i.ibb.co/wdFMmwr/cataa.jpg"
      );
      this.users[2] = Users.makeUser(
        89543424,"orhanbajramovic","orhanbajramovic","Orhan","Bajramovic","Jablanica"
           , "https://i.ibb.co/W2FD6T6/ora.jpg"
      );
    }

  logInFunction():void{
      for (const i of this.users) {
        if (i.JMBG === this.JMBG && i.password === this.password) {
          this.userFound = true;
          this.takeMe(i);
          return;
        }
      }
      this.userFound = true;
  }

  takeMe(korisnik:Users):void{
    sessionStorage.setItem('korisnik',JSON.stringify(korisnik));
    this.route.navigate(['eCitizen/',korisnik.username]);
  }
}
