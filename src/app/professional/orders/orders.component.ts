import { Component, OnInit } from '@angular/core';
import {Router,NavigationEnd} from '@angular/router'
import {AuthServiceService} from '../../auth-service.service'
import {ServicesService} from '../../services.service'
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
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
    this.ss.getpreviousordersbyprof(this.as.prof._id).subscribe((data)=>{
     //this.ss.getpreviousordersbyprof("5dac1c8aab543328e4e39a11").subscribe((data)=>{
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
