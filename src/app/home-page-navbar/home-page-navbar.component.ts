import { Component, ElementRef, HostListener, OnInit, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-home-page-navbar',
  templateUrl: './home-page-navbar.component.html',
  styleUrls: ['./home-page-navbar.component.scss'],
})
export class HomePageNavbarComponent implements OnInit {

  @HostListener('document:scroll') 
  smt():void{
    if(Math.ceil(window.scrollY) > 0 && Math.ceil(window.scrollY) < 380){
      this.updateRef(this.aboutRef.nativeElement)
    }else if(Math.ceil(window.scrollY) > 380 && Math.ceil(window.scrollY) < 1200){
      this.updateRef(this.helpRef.nativeElement)
    }else if(Math.ceil(window.scrollY) > 1200 && Math.ceil(window.scrollY) < 1873){
      this.updateRef(this.prosRef.nativeElement)
    }else if(Math.ceil(window.scrollY) > 1873){
      this.updateRef(this.teamRef.nativeElement)
    }
  }

  @ViewChild('about') aboutRef!:ElementRef;
  @ViewChild('help') helpRef!:ElementRef;
  @ViewChild('pros') prosRef!:ElementRef;
  @ViewChild('team') teamRef!:ElementRef;


  constructor() { 
  }

  ngOnInit(): void {
    
  }

  private beforeRef!:any;
  private currentRef!:any;
  private first:boolean = true;

  toAbout():void{
    document.getElementById("aboutProject")?.scrollIntoView({behavior:"smooth"});
  }
  toHowItHelps():void{
    document.getElementById("howItHelps")?.scrollIntoView({behavior:"smooth"});
  }
  toProsAndCons():void{
    document.getElementById("prosAndCons")?.scrollIntoView({behavior:"smooth"});
  }
  toTeam():void{
    document.getElementById("team")?.scrollIntoView({behavior:"smooth"});
  }

  private updateRef(ref:any):void{
    this.currentRef = ref;
    if(this.first){
      this.currentRef.style.borderBottom = "2px solid white";
      this.first = false;
      this.beforeRef = this.currentRef;
      return;
    } else {
      if (this.beforeRef === this.currentRef) {
        return;
      }
      this.currentRef.style.borderBottom = "2px solid white";
      this.beforeRef.style.borderBottom = "none";
      this.beforeRef = this.currentRef;
    }
  }

}
