import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {

   user = new User('');

   constructor() {

   }

  ngOnInit() {
  }

  save(formData: any) {

  }

  click(userObj: any, signupForm: NgForm, userName: NgModel) {
    console.log('this.user:');
    console.log(this.user);

    console.log('userObj:');
    console.log(userObj);
    console.log('signupForm:');
    console.log(signupForm);
    console.log('userName:');
    console.log(userName);
  }
}

class User {
  constructor( public userName: string) {
  }
}



