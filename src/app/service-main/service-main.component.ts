import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {AuthServiceService} from '../auth-service.service'
import {ServicesService} from '../services.service'
declare var $:any;
@Component({
  selector: 'app-service-main',
  templateUrl: './service-main.component.html',
  styleUrls: ['./service-main.component.css']
})
export class ServiceMainComponent implements OnInit {
  public servicelist:any;
  public  date = new Date();
  
  constructor(public as:AuthServiceService,public ss:ServicesService,private router: Router) { }

  ngOnInit() {

    this.ss.getServices().subscribe((data)=>{
      this.servicelist=data;
    });
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
     
     
  });

    
  }

  onselect(s){
    console.log(s);
    
    this.router.navigate(['/service',s.name]);
  
  }

  
}
