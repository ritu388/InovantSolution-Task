import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { CredentialService } from 'src/app/Service/credential.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  signup: any = FormGroup;
  submitForm: boolean= false;
  checkPass: any;
  constructor(public credentialService: CredentialService) { }

  ngOnInit(): void {
    this.createSignupForm();
  }

  createSignupForm(){
    this.signup = new FormGroup({
      Fullname: new FormControl('', [Validators.required]),
      email: new FormControl('',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]),
      password: new FormControl('', [Validators.required]),
      confirm_password: new FormControl('', [Validators.required]),
      interests: new FormControl('', [Validators.required]),
      size: new FormControl('', [Validators.required]),
      newsLetter: new FormControl('', [Validators.required]),
      policy: new FormControl('',[Validators.required])
    });
  }


  postSignup(){
    this.submitForm = true;
    let body = {
      first_name: this.signup.value.fullname,
      last_name: this.signup.value.fullname,
      email: this.signup.value.email,
      password: this.signup.value.password,
      confirmPassword: this.signup.value.confirm_password,
      interests: this.signup.value.interests,
      size: this.signup.value.size,
      newsletter_subscribed: this.signup.value.newsLetter,
      policy: this.signup.value.policy
    }
    console.log(body);
    if(this.signup.valid){
      this.credentialService.postLoginForm(body);
      alert('account is created successfully!');
    } else {
      alert('please enter valid details');
    }
  }



}
