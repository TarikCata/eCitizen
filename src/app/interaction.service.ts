import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Users } from './Users/users-log-in';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  korisnik:Users = new Users();
  private objSource = new BehaviorSubject<Users>(this.korisnik);
  obj = this.objSource.asObservable();

  constructor() { }

  sendData(object:Users):void{
    this.korisnik = object;
    this.objSource.next(this.korisnik);
  }
}
