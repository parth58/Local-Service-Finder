import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router'
import { AuthServiceService } from '../auth-service.service'
import { ServicesService } from '../services.service'
import { TouchSequence } from 'selenium-webdriver';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public order: any;
  public isuser:Boolean = false;
  public userid;
  public sender;
  public isEstimated = false;
  public isDone = false;
  navigationSubscription;
  constructor(public as: AuthServiceService, public ss: ServicesService, private router: Router, private router1: ActivatedRoute) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }
  initialiseInvites() {
    var id = this.router1.snapshot.paramMap.get('id');
    this.ss.getorderbyid(id).subscribe((data) => {
      //this.ss.getpreviousordersbyprof("5dac1c8aab543328e4e39a11").subscribe((data)=>{
      this.order = data;

      
      if (this.order.Estimate!=null) {
        console.log("debug it");
        this.isEstimated = true;
        console.log("isEstimated"+this.isEstimated);
      }
      if (this.order.Status == "Done") {
        console.log("debug it 1");
        this.isDone = true;
        console.log("isDone"+this.isDone);
      }
      if (this.as.user) {
        console.log("debug it 2");
        this.isuser = true;
        this.userid = this.as.user._id;
        this.sender = this.as.user.FirstName+ " "+this.as.user.LastName

      }
      else {
        console.log("debug it 4");
        this.isuser = false;
        this.userid = this.as.prof._id;
        this.sender = this.as.prof.FirstName+ " "+this.as.prof.LastName
      }

      console.log("geting order");
      console.log(data);
    });
  }
  ngOnInit() {
  }

  sendEstimte(value) {
    console.log("send Estimate " + value);
    this.ss.updateestimate(this.order._id,value);
  }
  sendMessage(msg) {
    console.log("send Message " + msg);
    var chat={
      sender:this.sender,
      message:msg,
      sender_id:this.userid,
      timestamp:new Date()
    }
    this.ss.sendchatmessage(this.order._id,chat);

  }
}
