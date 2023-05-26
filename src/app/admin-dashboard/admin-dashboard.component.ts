import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import { UserService } from '../services/user.service';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminDashboardComponent implements OnInit,OnDestroy{
events:any=[];
groups
  constructor(private eventService:EventService){

  }
  ngOnInit() {

    this.eventService.getEventByType().subscribe(res=>{
      console.log(res);
      this.groups=res
    })
    this.eventService.getAll().subscribe(res=>{
      this.events=res
    })
    const element1 = document.getElementById("header1");
    element1.setAttribute("hidden","true");
    const element2 = document.getElementById("ftco-footer");
    element2.setAttribute("hidden","true");
  }
  ngOnDestroy() {
    const element1 = document.getElementById("header1");
    element1.removeAttribute("hidden");
    const element2 = document.getElementById("ftco-footer");
    element2.removeAttribute("hidden");
  }
  getDate(date){
    return Date.now()>date;
  }

}
