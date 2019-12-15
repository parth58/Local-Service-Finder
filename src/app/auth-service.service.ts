import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { Observable, throwError, of } from 'rxjs';
import { mergeMap, switchMap, retry, map, catchError, filter, scan } from 'rxjs/operators';

export interface User {
  _id: string,
  FirstName: String,
  LastName: String,
  Email: String,
  PhoneNo: Number,
  Address1: String,
  Address2: String,
  City: String,
  Zip: Number,
  Password: String,
  JoinDate: Date
}

export interface Prof {
  _id: string,
  FirstName: String,
  LastName: String,
  Email: String,
  PhoneNo: Number,
  Address: String,
  Gender:String,
  Service:String,
  Experience:Number,
  Password: String,
  JoinDate: Date
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  public user: User;
  public prof:Prof;
  public isloggedIn:boolean =JSON.parse(localStorage.getItem('LoggedIn'))=="true"||false;
  public isprof:boolean=false;
  public isuser:boolean=true;
  
  constructor(private http: HttpClient, private router: Router) { }



  public newuser(info) {
    console.log("in register-service called.");
    this.http.post('http://localhost:8000/register', info).subscribe((res) => { 
      var data = JSON.stringify(res);
     
      var stat = JSON.parse(data);
      alert(stat.message);
      this.router.navigate(['/']);
     });


  }

  public newprof(info) {
    console.log("in register-service called.");
    this.http.post('http://localhost:8000/registerProf', info).subscribe((res) => { 
      var data = JSON.stringify(res);
     
      var stat = JSON.parse(data);
      alert(stat.message);
     });


  }

  public check(info) {
    console.log(" in login-service called.");
    this.http.post('http://localhost:8000/logincheck', info).subscribe(res => {
      var data = JSON.stringify(res);
      console.log("jhgjkl1");
      console.log(data);
      var stat = JSON.parse(data);
      console.log("jhgjkl");
      console.log(stat)
      if (stat.status == "fail") {
        this.router.navigate(['/']);
        alert(stat.message);
        
      }
      else {
          this.user=stat.user;
          this.isloggedIn=true;
          localStorage.setItem('LoggedIn','true');
          this.isuser=true;
          this.isprof=false;
         
      }
    });
  }



  public profcheck(info) {
    console.log(" in prof login-service called.");
    this.http.post('http://localhost:8000/proflogincheck', info).subscribe(res => {
      var data = JSON.stringify(res);
      console.log(data);
      var stat = JSON.parse(data);
      console.log(stat)
      if (stat.status == "fail") {
        this.router.navigate(['/prof-login']);
        alert(stat.message);
      }
      else {
       
          this.prof=stat.user;
          localStorage.setItem('LoggedIn','true');
          this.isloggedIn=true;
          this.isuser=false;
          this.isprof=true;
          
      }
    });
  }

  logout(){
  console.log("Logout is called");
  localStorage.removeItem('LoggedIn');
  this.user=null;
  this.prof=null;
  this.isloggedIn=false;
  this.isuser=true;
  this.isprof=false;
  }






}
