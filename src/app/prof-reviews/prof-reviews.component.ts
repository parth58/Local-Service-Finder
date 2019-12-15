import { Component, OnInit } from '@angular/core'
import {AuthServiceService} from '../auth-service.service'
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router'
import {ServicesService} from '../services.service'
declare var $:any;

@Component({
  selector: 'app-prof-reviews',
  templateUrl: './prof-reviews.component.html',
  styleUrls: ['./prof-reviews.component.css']
})
export class ProfReviewsComponent implements OnInit {
  public proflist;
  public prof=null;
  public  address;
  public sname;
  navigationSubscription;
  
  constructor(public as:AuthServiceService,public ss:ServicesService,private router:ActivatedRoute,private router1:Router) { 
    this.navigationSubscription = this.router1.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }
  initialiseInvites() {
     this.sname=this.router.snapshot.paramMap.get('sname');
   
    console.log(this.sname);
    this.ss.getProfessionalbyservice(this.sname).subscribe((data)=>{
      console.log(data);
      this.proflist=data;
   
      this.address=this.as.user.Address1+" "+this.as.user.Address2;
      console.log(this.address);
    });
  }
  ngOnInit() {
   
    // var sname=this.router.snapshot.paramMap.get('sname');
   
    // console.log(sname);
    // this.ss.getProfessionalbyservice(sname).subscribe((data)=>{
    //   console.log(data);
    //   this.proflist=data;
    // });
    
  }


  lastback(){
    $(document).ready(function () {
     $('#chooseAddressModal').modal('hide');
    $('#chooseDateModal').modal('show');
     
  });
  }
  secondback(){
    $(document).ready(function () {
     
    $('#chooseDateModal').modal('hide');
    $('#chooseworkModal').modal('show');
     
  });
  }
  
  placeOrder(info){
    console.log("calling place order");
      console.log(info);
      if(this.as.user){
      info.User =this.as.user
      info.Professional= this.prof;
      console.log(info);
      this.ss.placeorder(info);
      
     
      console.log("After place orderS");
      $(document).ready(function () {
     
        $('#orderform').trigger("reset");
        $(document).ready(function () {
          $('#chooseworkModal').modal('hide');
          $('#chooseAddressModal').modal('hide');
         $('#chooseDateModal').modal('hide');
          
       });
      });
     
      alert("Your Request is sent Sucessfully");
    }
    else{
      alert("Please Login First");
    }
  }
  setprof(p){
    if(this.as.user){
      this.address=this.as.user.Address1+" "+this.as.user.Address2;
      $('#chooseworkModal').modal('toggle');
    }
    else{
      alert("Please Login First");
    }
    console.log('requested prof'+ p);
      this.prof=JSON.stringify(p) 
      console.log('requested prof'+ this.prof);
  }

}
