import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component'
import { AboutUsComponent } from './about-us/about-us.component'
import { HowItworksComponent } from './how-itworks/how-itworks.component'
import { ServiceMainComponent } from './service-main/service-main.component'
import { ChatComponent } from './chat/chat.component'
import { MyordersComponent } from './myorders/myorders.component'
import { RequestsComponent } from './professional/requests/requests.component'
import { ProfReviewsComponent } from './prof-reviews/prof-reviews.component'
import { LoginComponent } from './professional/login/login.component'
import { ReviewComponent } from './professional/review/review.component'
import { PendingComponent } from './professional/pending/pending.component'
import { OrdersComponent } from './professional/orders/orders.component';
import { UserRequestComponent } from './user-request/user-request.component'
import { from } from 'rxjs';
import { AuthGuard } from './auth.guard';
import { ProfauthGuard } from './profauth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent , runGuardsAndResolvers: 'always',},
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'how-it-works', component: HowItworksComponent },
  {
    path: 'service/:sname', component: ServiceMainComponent,
    children: [
      { path: 'reviews', component: ProfReviewsComponent }
    ],
    runGuardsAndResolvers: 'paramsChange',
  },
  { path: 'prof-login', component: LoginComponent, runGuardsAndResolvers: 'always' },

  { path: 'prof/reviews', component: ReviewComponent,canActivate:[ProfauthGuard] },
  { path: 'prof/orders', component: OrdersComponent,canActivate:[ProfauthGuard] },
  { path: 'prof/requests', component: RequestsComponent,canActivate:[ProfauthGuard] },
  { path: 'prof/pending-order', component: PendingComponent ,canActivate:[ProfauthGuard]},
  { path: 'chat/:id', component: ChatComponent,canActivate:[AuthGuard,ProfauthGuard]  },
  { path: 'myorders', component: MyordersComponent, runGuardsAndResolvers: 'always',canActivate:[AuthGuard] },
  { path: 'myrequests', component: UserRequestComponent, runGuardsAndResolvers: 'always',canActivate:[AuthGuard] },
  { path: 'professional', component: RequestsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
