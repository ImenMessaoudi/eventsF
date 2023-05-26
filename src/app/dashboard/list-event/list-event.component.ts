import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { EventService } from 'src/app/services/event.service';
import Swal from 'sweetalert2'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListEventComponent {
 eventForm !:FormGroup;
  @ViewChild('content', { static: false }) el!: ElementRef;
 
@ViewChild('myModal', { static: false }) myModal: ElementRef ;
elm:any= HTMLElement;
isLoged:any;
user:any;
modalTitle=''
events:any=[]
id:any=''
constructor(private datePipe: DatePipe,private fb:FormBuilder,private toast: HotToastService,private eventService:EventService){}
  ngOnInit() {

    this.getAllEvent()
    
    this.eventForm=this.fb.group({
    
            title:['',Validators.required],
            description:['',Validators.required],
            startDate:['',Validators.required],
            endDate:['',Validators.required],
            lieu:['',Validators.required],
            type:['Formation',Validators.required],

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
  ngAfterViewInit(): void {
    this.elm = this.myModal.nativeElement as HTMLElement;
 }
 close(): void {
  this.eventForm.reset()
     this.elm.classList.remove('show');
     setTimeout(() => {
       this.elm.style.width = '0';
     }, 75);
 }
 open(): void {
  this.modalTitle='Add new event'
  
     this.elm.classList.add('show');
     this.elm.style.width = '100vw';
     this.id=''
 }
 openUpdate(id): void {
  this.id=id;
  this.modalTitle='Update  event'

  this.eventService.getEvent(id).subscribe(res=>{
this.eventForm.patchValue({
  title:res.title ,
  description: res.description,
  startDate: this.datePipe.transform(res.startDate  , 'yyyy-MM-dd'),
  endDate: this.datePipe.transform(res.endDate  , 'yyyy-MM-dd'),
  lieu: res.lieu,
  type:res.type ,
})
      
 
  })
  
     this.elm.classList.add('show');
     this.elm.style.width = '100vw';
 }

 onSubmit(){
if(this.id!=''){
  this.eventService.updateEvent(this.id,this.eventForm.value).subscribe(res=>{
    this.close();
    this.toast.success('Event updated with success!!');
    this.getAllEvent()
  })
  
}else{
  
 if(this.eventForm.valid){
  this.eventService.addEvent(this.eventForm.value).subscribe(res=>{
    this.close();
    this.eventForm.reset()
    this.toast.success('Event added with success!!');
    this.getAllEvent()
  })
 }
}
 }
 getAllEvent(){
  
  this.eventService.getAll().subscribe(res=>{
    this.events=res
  })
 }
 deleteEvent(id){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.eventService.deleteEvent(id).subscribe(res=>{
        this.toast.success('Event deleted with success!!');
    this.getAllEvent()
      })
    }
  })
 }
}
