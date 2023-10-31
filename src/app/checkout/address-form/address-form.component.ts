import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent {

  addresses=[1,1,1];

  
  myForm:FormGroup=this.formBuilder.group({
    firstName:["",Validators.required],
    lastName:["",Validators.required],
    streetAddress:["",Validators.required],
    city:["",Validators.required],
    state:["",Validators.required],
    zipCode:["",Validators.required],
    mobile:["",Validators.required]

  });

  constructor(private formBuilder: FormBuilder, private router: Router) {
    
  }


  handleCreateOrder(item:any){

  }

  handleSubmit=()=>{
    const formValue = this.myForm.value;
    console.log(formValue);
  }

 navigateTo(){
  this.router.navigate(['/payment'])
 }
}
