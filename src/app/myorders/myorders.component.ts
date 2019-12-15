import { Component, OnInit } from '@angular/core';
import {Router,NavigationEnd} from '@angular/router'
import {AuthServiceService} from '../auth-service.service'
import {ServicesService} from '../services.service'
declare var $:any;

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
  public myorders:any;
  navigationSubscription;
  constructor(public as:AuthServiceService,public ss:ServicesService,private router: Router) { 
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }
  initialiseInvites() {
   this.ss.getordersbyuser(this.as.user._id).subscribe((data)=>{
      this.myorders=data;
      console.log("geting order");
      console.log(data);
    });
  }
  ngOnInit() {
    
  }
  openchat(id){
    console.log("Opening chat of id "+id);
    this.router.navigate(['/chat',id]);
  }
}
