import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InteractionService } from '../interaction.service';
import { Users } from '../Users/users-log-in';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  constructor(private interaction : InteractionService,
    private route : Router) { }

  user = new Users;

  ngOnInit(): void {
    let u = sessionStorage.getItem('korisnik');
    this.user = JSON.parse(u || '{}');
  }

  redirectDocuments(path:string):void{
    this.route.navigate(['eCitizen/',this.user.username,'documents',path]);
  }
}
