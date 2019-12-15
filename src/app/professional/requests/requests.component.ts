import { Component, OnInit } from '@angular/core';
import {Router,NavigationEnd} from '@angular/router'
import {AuthServiceService} from '../../auth-service.service'
import {ServicesService} from '../../services.service'
@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
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
   this.ss.getrequestedordersbyprof(this.as.prof._id).subscribe((data)=>{
    //this.ss.getrequestedordersbyprof("5dac1c8aab543328e4e39a11").subscribe((data)=>{
      this.myorders=data;
      console.log("geting  request order");
      console.log(data);
    });
  }
  ngOnInit() {
  }
openchat(id){
  this.router.navigate(['/chat',id]);
}
approve(id){
  this.ss.updatestatus(id,"Approved");
}
reject(id){
  this.ss.updatestatus(id,"Rejected");
}
}