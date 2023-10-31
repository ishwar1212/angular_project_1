import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css']
})
export class MainSliderComponent {

  constructor(private router:Router){

  }

  navigateTo(){
    this.router.navigate(['/products'])

  }

}
