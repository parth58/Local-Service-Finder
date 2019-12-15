import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpResponse, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Router,RouterModule } from '@angular/router';
import { Observable, throwError, of } from 'rxjs';
import { mergeMap, switchMap, retry, map, catchError, filter, scan } from 'rxjs/operators'; 

export const httpOptions =  {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})



export class ServicesService {
  // public servicelist:any;

  constructor(private http:HttpClient,private router:Router) { 
    // this.getServices().subscribe((data)=>{
    //   this.servicelist=data;
    // });
  }

  public getServices(){
    console.log("inside getservices")
    

    console.log("returning res");
    
    return this.http.get("http://localhost:8000/Services");
  }

  public sendMessage(info){
    console.log("in -service called.");
    this.http.post('http://localhost:8000/user_message', info).subscribe((res)=>{console.log(res)}); 
    
    alert('Message Sent');
    this.router.navigate(['/contact-us']);
    
  }


  public placeorder(info){
    console.log("in service placeorder");
    console.log(info);
    this.http.post('http://localhost:8000/placeorder', info).subscribe((res)=>{console.log(res)});   
  }

  public getProfessional(){
    console.log("inside getProfessional()")
    

    console.log("returning res");
    
    return this.http.get("http://localhost:8000/professional");
  }

  public getProfessionalbyid(id){
    console.log("inside getProfessional()")
    

    console.log("returning res");
    
    return this.http.get("http://localhost:8000/professional/"+id);
  }

  public getProfessionalbyservice(sname){
    console.log("inside getProfessional by service ")
    

    console.log("returning res");
    
    return this.http.get("http://localhost:8000/professional/service/"+sname);
  }

  

  public updateReview(id){
    console.log("inside getProfessional()")
    

    console.log("returning res");
    
    return this.http.put("http://localhost:8000/professional_review",httpOptions);
  }


  public getorders(){
    return this.http.get("http://localhost:8000/orders");
  }
  public getorderbyid(id){
    console.log("getting order of id "+id)
    return this.http.get("http://localhost:8000/order/"+id);
  }

  public getordersbyuser(id){
    console.log("getting order of user "+id)
    return this.http.get("http://localhost:8000/order/user/"+id);
  }

  public getrequestedordersbyuser(id){
    console.log("getting order of user "+id)
    return this.http.get("http://localhost:8000/order/user/requested/"+id);
  }

  public getordersbyprof(id){
    return this.http.get("http://localhost:8000/orders/prof/"+id);
  }
  public getrequestedordersbyprof(id){
    return this.http.get("http://localhost:8000/orders/requested/prof/"+id);
  }
  public getpendingordersbyprof(id){
    return this.http.get("http://localhost:8000/orders/pending/prof/"+id);
  }
  public getpreviousordersbyprof(id){
    return this.http.get("http://localhost:8000/orders/previous/prof/"+id);
  }
  public updateestimate(id,estimate){
    console.log("In SErvice update estimate is called");
    var e={"estimate":estimate};
    return this.http.post("http://localhost:8000/order/updateestimate/"+id,e).subscribe((res)=>{console.log(res)}); ;
  }
  public updatestatus(id,stat){
    console.log("In SErvice status estimate is called");
    var s={"status":stat};
    return this.http.post("http://localhost:8000/order/updatestatus/"+id,s).subscribe((res)=>{console.log(res)}); ;
  }

  public sendchatmessage(id,chat){
    console.log("In SErvice send Chat message is called");

    return this.http.post("http://localhost:8000/order/addchatmessage/"+id,chat).subscribe((res)=>{console.log(res)}); ;
  }

}
