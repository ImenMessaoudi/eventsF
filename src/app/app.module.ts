import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {CommonModule, DatePipe, NgOptimizedImage} from "@angular/common";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component'; 
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { ContactComponent } from './contact/contact.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SignIn1Component } from './sign-in1/sign-in1.component';
import { SignUp1Component } from './sign-up1/sign-up1.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminTablesComponent } from './admin-tables/admin-tables.component';
import { NewEventComponent } from './dashboard/new-event/new-event.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ListEventComponent } from './dashboard/list-event/list-event.component';
import { ListMembreComponent } from './dashboard/list-membre/list-membre.component';
import { HttpClientModule } from '@angular/common/http';
import { HotToastModule } from '@ngneat/hot-toast';
import { EventsComponent } from './events/events.component';
import { ProfilComponent } from './dashboard/profil/profil.component';
import { FactureComponent } from './dashboard/facture/facture.component';
import { FactureService } from './services/facture.service';
import { NewUserComponent } from './dashboard/new-user/new-user.component';
import { UpdateUserComponent } from './dashboard/update-user/update-user.component';
 import { ReclamationService } from './services/reclamation.service';
import { ListeReclamationComponent } from './dashboard/liste-reclamation/liste-reclamation.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { ActivityComponent } from './dashboard/activity/activity.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    BlogComponent,
    BlogSingleComponent,
    ContactComponent,
    ScheduleComponent,
    SpeakersComponent,
    SignIn1Component,
    SignUp1Component,
    ProfileComponent,
    AdminDashboardComponent,
    AdminTablesComponent,
    NewEventComponent,
    SidebarComponent,
    ListEventComponent,
    ListMembreComponent,
    EventsComponent,
    ProfilComponent,
    FactureComponent,
    NewUserComponent,
    UpdateUserComponent,
    ReclamationComponent,
    ListeReclamationComponent,
    ActivityComponent
  ],
  imports: [CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgOptimizedImage,
    HttpClientModule, 
    HotToastModule.forRoot(),
    NgxPaginationModule,
    GoogleMapsModule,

  ],
  providers: [DatePipe,FactureService,ReclamationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
