import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CredentialService {

  api = 'https://admin.eniola.app/api/v1/login';
  storedData= new BehaviorSubject(null);
  constructor( public http: HttpClient) { }

  postLoginForm(body: any){
    return this.http.post(`${this.api}`, body).subscribe((res:any) =>{
      if(res){
        this.storedData.next(res.data);
      }
    });
  }

  fetchData(){
    return this.storedData.asObservable();
  }


}
