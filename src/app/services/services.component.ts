import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service'

declare var $: any;
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
 
  public servicelist:any;
  constructor(public ss:ServicesService) {
    
   }
   
  ngOnInit() {
   
    this.ss.getServices().subscribe((data)=>{
      this.servicelist=data;
    });
   
    
  }
  //  console.log(this.servicelist.slice(0,6));
    
  

}
