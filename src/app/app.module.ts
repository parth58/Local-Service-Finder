import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { ServicesService} from './services.service';
import { AuthGuard } from './auth.guard'
import { ProfauthGuard } from './profauth.guard'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServicesComponent } from './services/services.component';
import { SliderComponent } from './slider/slider.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HowItworksComponent } from './how-itworks/how-itworks.component';
import { ProfReviewsComponent } from './prof-reviews/prof-reviews.component';
import { ServiceMainComponent } from './service-main/service-main.component';
import { ChatComponent } from './chat/chat.component';
import { MyordersComponent } from './myorders/myorders.component';
import { OrdersComponent } from './professional/orders/orders.component';
import { RequestsComponent } from './professional/requests/requests.component';
import { ReviewComponent } from './professional/review/review.component';
import { LoginComponent } from './professional/login/login.component';
import { PendingComponent } from './professional/pending/pending.component';
import { UserRequestComponent } from './user-request/user-request.component'
import { AuthServiceService } from './auth-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ServicesComponent,
    SliderComponent,
    ContactUsComponent,
    AboutUsComponent,
    FooterComponent,
    HomeComponent,
    HowItworksComponent,
    ProfReviewsComponent,
    ServiceMainComponent,
    ChatComponent,
    MyordersComponent,
    OrdersComponent,
    RequestsComponent,
    ReviewComponent,
    LoginComponent,
    PendingComponent,
    UserRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServicesService,AuthServiceService,AuthGuard,ProfauthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
