import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 6';
  secondFormGroup: FormGroup;
  newItem = {};

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(private _formBuilder: FormBuilder) {
    this.secondFormGroup = this._formBuilder.group({
      category: ['', Validators.required],
      subCategory: ['', Validators.required],
      name: ['', Validators.required],
      amount: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  AddNewProduct(newProduct) {  
    if (this.secondFormGroup.valid) {
      //add product
      setTimeout(() => 
      this.formGroupDirective.resetForm(), 0)
    }
  }

}
