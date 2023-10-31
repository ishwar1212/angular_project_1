import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestedproduct',
  templateUrl: './suggestedproduct.component.html',
  styleUrls: ['./suggestedproduct.component.css']
})
export class SuggestedproductComponent implements OnInit {
 

  @Input() count: number=3;
  constructor(){

  }
  ngOnInit():void {}


}

