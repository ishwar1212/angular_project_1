import { Component, OnInit } from '@angular/core';
import { Apple_Mobile } from 'src/Data/apple';
import { Samsung_Mobile } from 'src/Data/Samsung';
import { Mi_Mobile } from 'src/Data/mi';
import { Oppo_Mobile } from 'src/Data/oppo';
import { Vivo_Mobile } from 'src/Data/vivo';
import { Morrola_Mobile } from 'src/Data/motrola';
import { One_Plus_Mobile } from 'src/Data/oneplus';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 samsung : any;
 mi : any;
 apple :any;
 oppo: any;
 vivo : any;
 motrola : any;
 oneplus: any;
  constructor(){}
  ngOnInit() {
      this.samsung=Samsung_Mobile.slice(0,5);
      this.mi=Mi_Mobile.slice(0,5);
      this.apple=Apple_Mobile.slice(0,5);
      this.oppo=Oppo_Mobile.slice(0,5);
      this.vivo=Vivo_Mobile.slice(0,5);
      this.motrola=Morrola_Mobile.slice(0,5);
      this.oneplus=One_Plus_Mobile.slice(0,5);


  }

  }


