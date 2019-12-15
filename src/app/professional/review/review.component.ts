import { Component, OnInit } from '@angular/core';
import {Router,NavigationEnd} from '@angular/router'
import {AuthServiceService} from '../../auth-service.service'
import {ServicesService} from '../../services.service'
declare var $:any;

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  public reviewlist;
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
  
    // var id = '5dac1c8aab543328e4e39a11';
    console.log(this.as.prof._id);
    this.ss.getProfessionalbyid(this.as.prof._id).subscribe((data)=>{
      console.log("Review of Professional");
      console.log(data);
      this.reviewlist=data;
    });
  }
  ngOnInit() {
   
  
  }

}
