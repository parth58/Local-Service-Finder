import { Component, OnInit } from '@angular/core';
import{ServicesService} from '../services.service'
declare var $:any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private ss:ServicesService) { }

  ngOnInit() {
    
  }

  sendMessage(info){
    console.log(info);
    console.log("Calling SendMessages")
    this.ss.sendMessage(info);
    $('#msgfrom').trigger("reset");


  }
  
}
