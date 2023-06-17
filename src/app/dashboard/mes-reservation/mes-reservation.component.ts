import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-mes-reservation',
  templateUrl: './mes-reservation.component.html',
  styleUrls: ['./mes-reservation.component.css']
})
export class MesReservationComponent {

  eventT:any;
  reservations:any;
  searchBydateForm!:FormGroup;
  reservation?:any;
  totala:any=0;
  date:any;
  id:any
  p: number = 1;
  total:any=0;
  constructor( private eventsService:EventService,private reservatioService:ReservationService) {}
  ngOnInit() {
    this.id=localStorage.getItem('id')
    
    this.date=Date.now()
    this.getAll()


const element1 = document.getElementById("header1");
element1.setAttribute("hidden","true");
const element2 = document.getElementById("ftco-footer");
element2.setAttribute("hidden","true");
}
getAll(){
  
this.reservatioService.getAllReservation().subscribe(res=>{
  this.reservations=res;
})
}
ngOnDestroy() {
const element1 = document.getElementById("header1");
element1.removeAttribute("hidden");
const element2 = document.getElementById("ftco-footer");
element2.removeAttribute("hidden");
}
 
 
  

 
 

 
 
}
