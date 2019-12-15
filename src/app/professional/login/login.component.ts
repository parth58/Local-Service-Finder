import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../../auth-service.service'
import {ServicesService} from '../../services.service'
import {Router} from '@angular/router'
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public servicelist:any;
  constructor(public ss: AuthServiceService,public ss1:ServicesService, private router: Router) { }

  ngOnInit() {
    this.ss1.getServices().subscribe((data)=>{
      console.log('service list in login component');
      console.log(data);
      this.servicelist=data;
    });
  }
  profloginauth(info) {
    console.log("calling loginauth");
    this.ss.profcheck(info);
    $(document).ready(function(){
      console.log("closing model of prof login");
     
      $('#profloginModal').modal('hide');
    });
    if (this.ss.prof) {
    this.router.navigate(['/prof/requests']);
    }
  }

  registerProf(info){
    console.log("calling registerProf");
    this.ss.newprof(info);
    $(document).ready(function(){
      console.log("closing model of prof login");
      $('#profrgform').trigger("reset");
      $('#profloginModal').modal('hide');
    });
    this.router.navigate(['/']);
   
   
    console.log("After registerProf");
   
  }
}
