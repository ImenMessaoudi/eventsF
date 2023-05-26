import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  events:any=[]
  searchForm!:FormGroup
constructor(private fb:FormBuilder,private eventService:EventService) {

  
  
}


ngOnInit(): void {
  this.searchForm=this.fb.group({
    adress:['',Validators.required],
    key:['',Validators.required]

  })
  this.eventService.getAll().subscribe(res=>{
    this.events=res
    console.log(this.events);
    
  })
}

serach(){

}
}
