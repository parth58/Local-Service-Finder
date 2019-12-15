import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../auth-service.service'
import {ServicesService} from '../services.service'
import {Router} from '@angular/router'
declare var $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  public servicelist:any;
  constructor(public ss:AuthServiceService,public ss1:ServicesService,private router: Router) { }

  ngOnInit() {
    this.ss1.getServices().subscribe((data)=>{
      this.servicelist=data;
    });
    // this.servicelist=this.ss1.servicelist;
  }

closeModal(){
  $('#loginModal').modal('hide');
     
}
registerUser(info){
    console.log("calling registerUser");
    this.ss.newuser(info);
    
    $(document).ready(function(){
      $('#loginModal').modal('hide');
      $('#registerModal').modal('hide');
      $('#rgform').trigger("reset");
    });
    console.log("After registerUser");
}

loginauth(info){
  console.log("calling loginauth");
    this.ss.check(info);
    if(this.ss.user){
   
  }
    $(document).ready(function(){
      $('#loginModal').modal('hide');
      $('#registerModal').modal('hide');
      $('#msgfrom').trigger("reset");
      
    });
    console.log(this.ss.user)
    console.log(" after loginauth");
}


onselect(s){
  console.log(s);
 
  this.router.navigate(['/service',s.name]);

}

logout(){
  this.ss.logout();
  this.router.navigate(['/']);

  alert("Succesfully Logged Out");
}
}
