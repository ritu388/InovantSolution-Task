import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  InLogin: boolean = true;
  // record: any;
  constructor() { }

  checkLogin(): boolean{
    return this.InLogin;
  }

}

