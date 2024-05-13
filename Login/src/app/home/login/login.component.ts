import { NgAnalyzedFile } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CredentialService } from 'src/app/Service/credential.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any =  FormGroup;
  submitForm: boolean = false;
  tableData: any;
  constructor(
    public credentialService: CredentialService,
    public Router: Router) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl('', [Validators.required, Validators.maxLength(6), Validators.minLength(6)])
    });
  }

  loginFunction(){
    this.submitForm = true;
    let body = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    console.log('login form details',body);
    if (this.loginForm.valid){
      this.credentialService.postLoginForm(body)
        alert('login Successfully');
        this.Router.navigate(['/']);
    } else{
      alert('email and Password are incorrect');
    }
  }
}
