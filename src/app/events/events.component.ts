import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../services/event.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ReservationService } from '../services/reservation.service';
import { HotToastService } from '@ngneat/hot-toast';
import * as L from 'leaflet';
import {tileLayer,latLng} from 'leaflet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  
  events:any=[]
  event:any
  searchForm!:FormGroup;
  searchBydateForm!:FormGroup;
  @ViewChild('content', { static: false }) el!: ElementRef;
 
@ViewChild('myModal', { static: false }) myModal: ElementRef ;
@ViewChild('myactivity', { static: false }) myactivity: ElementRef ;
elm:any= HTMLElement;
elmA:any= HTMLElement;

 
options:any={ 
  layers:[tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  opacity: 0.7,
  maxZoom: 19,
  detectRetina: true,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  })],
  zoom:90,
  center:latLng(1.3521,103.8189)
  };
  onMapReady(map: L.Map) {}
  activities:any=[]
 
constructor(
  private router:Router,
  private fb:FormBuilder,private eventService:EventService,
  private reservationService:ReservationService,
  private toast: HotToastService) {
 (L.icon({
  iconUrl: 'assets/mark.png',
   
  popupAnchor: [13, 0],
}))
  
  
}


ngOnInit(): void {

  this.searchBydateForm=this.fb.group({
    start:['',Validators.required],
    end:['',Validators.required]

  })


  this.searchForm=this.fb.group({
    title:['',Validators.required],
    description:['',Validators.required]

  })
  this.eventService.getAll().subscribe(res=>{
    this.events=res
    console.log(this.events);
    
  })
}
ngAfterViewInit(): void {
  this.elm = this.myModal.nativeElement as HTMLElement;
  this.elmA = this.myactivity.nativeElement as HTMLElement;
}
close(): void {
  
     this.elm.classList.remove('show');
     setTimeout(() => {
       this.elm.style.width = '0';
     }, 75);
 }
 open(id): void {
   console.log(id);
   
    this.event=this.events.filter(el=>
      
      
      el.id==id
    )  
    this.event=this.event[0]
    
     this.elm.classList.add('show');
     this.elm.style.width = '100vw';
     
 }
serach(){

  this.eventService.findEventByTitleContainingOrDescriptionContaining(this.searchForm.value.title,this.searchForm.value.description).subscribe(res=>{
    this.events=res
  })

}

serachbyDate(){
  console.log(this.searchBydateForm.value);
  this.eventService.findAllByStartDateBetween(this.searchBydateForm.value.start,this.searchBydateForm.value.end).subscribe(res=>{
    this.events=res
  })

}

reserver(eventId:any){
  
  if(localStorage.getItem('id')==null){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You should connecte!',
      footer: '<a href="/login">Signin</a>'
    })
  }else{

    this.reservationService.addReservation(localStorage.getItem('id'),eventId).subscribe(res=>{
     // this.toast.success('Reservation added with success')
     this.openActivity(eventId)
    },(error=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Vous avez déja réserver dans cette événement!',
         
      })
    }))

  }
  
}
openActivity(id): void {
  this.elmA.classList.add('show');
  this.elmA.style.width = '100vw';
  this.event=this.events.filter(el=>
      
      
    el.id==id
  )  
  this.event=this.event[0]
  console.log(this.event);
  
   
    
}

add(id:any){
  console.log(id);
  console.log(this.activities);

  
  if(this.activities?.includes(id)){ 
    this.toast.error("Vous avez déja selectionne cette activite")
  }else{
  this.activities.push(id);
  this.toast.success("Activite selectionné avec success")
  console.log(this.activities);
  
}
}

delete(id:any){
  this.activities.indexOf(id);

  this.activities.splice(this.activities.indexOf(id),1)
  this.toast.show("Activite deleted with success")
  console.log(this.activities);
  
}

exist(id){
  return this.activities.includes(id);
}

booking(){
  console.log(this.event.id);
  console.log(localStorage.getItem('id'));

  console.log(this.activities);
  
  if(this.activities.length==0){
    this.toast.warning("Selectioone un activite")
  }else{
this.reservationService.reserver(localStorage.getItem('id'),this.event.id,this.activities).subscribe(res=>{
  this.toast.success("Reservé avec success")
},(error=>{
  this.toast.error("Vous avez déja reservé")
}))
  }
  
}
} 

 

