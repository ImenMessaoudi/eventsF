import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { Event, Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-event-calender',
  templateUrl: './event-calender.component.html',
  styleUrls: ['./event-calender.component.css']
})
export class EventCalenderComponent {

  eventForm !:FormGroup;
  @ViewChild('content', { static: false }) el!: ElementRef;
 
@ViewChild('myModal', { static: false }) myModal: ElementRef ;
elm:any= HTMLElement;
  Events:any= []

 calendarOptions: CalendarOptions = {
 
  plugins: [
    interactionPlugin,
    dayGridPlugin,
    timeGridPlugin,
    listPlugin,
  ],
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  },
    initialView: 'dayGridMonth',
    
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
    
     
  }
  constructor(private router: Router,private datePipe: DatePipe,private fb:FormBuilder,private changeDetector: ChangeDetectorRef,private eventService:EventService){


  }
  handleDateSelect(selectInfo: any) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: 1,
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

  onDateClick(res: any) {
   console.log("ok");
   
  }
  ngOnDestroy() {
    const element1 = document.getElementById("header1");
    element1.removeAttribute("hidden");
    const element2 = document.getElementById("ftco-footer");
    element2.removeAttribute("hidden");
    }
   ngOnInit() {
    this.eventForm=this.fb.group({
    
      title:['' ],
      description:['' ],
      startDate:['' ],
      endDate:['' ],
      lieu:['' ],
      type:[' ' ],
      

})
    const element1 = document.getElementById("header1");
element1.setAttribute("hidden","true");
const element2 = document.getElementById("ftco-footer");
element2.setAttribute("hidden","true");
   

this.eventService.getAll().subscribe(res=>{
  console.log(res);

  res.forEach(element => {
    let newEvent={
      id:element.id,
      title:element.title,
      start:element.startDate,
      end:element.endDate,
    }
    console.log(newEvent);
    
    this.Events.push(newEvent)
  });
  
})   
    setTimeout(() => {
      this.calendarOptions = {
        initialView: 'dayGridMonth',
         dateClick: this.onDateClick.bind(this),
        events: this.Events,
      };
    }, 2500);
  }
  
  ngAfterViewInit(): void {
    this.elm = this.myModal.nativeElement as HTMLElement;
 }
  handleEventClick(clickInfo: any) {
    this.open()
 console.log(clickInfo.event.id);
this.eventService.getAll().subscribe(res=>{

  let event=res.filter(el=>el.id==clickInfo.event.id);
  console.log(event);
  
  this.eventForm.patchValue({
   title:event[0].title ,
   description: event[0].description,
   startDate: this.datePipe.transform(event[0].startDate  , 'yyyy-MM-dd'),
   endDate: this.datePipe.transform(event[0].endDate  , 'yyyy-MM-dd'),
  
   type:event[0].type ,
 })
})
 
  }
  
 close(): void {
  this.eventForm.reset()
     this.elm.classList.remove('show');
     setTimeout(() => {
       this.elm.style.width = '0';
     }, 75);
 }
 open(): void {
   
  
     this.elm.classList.add('show');
     this.elm.style.width = '100vw';
     
 }
  handleEvents(clickInfo:any){
    console.log("clickInfo.event.title");
    this.changeDetector.detectChanges(); 
  }

  
 logout(){
  localStorage.removeItem('id')
  localStorage.removeItem('token')
  this.router.navigate(['/login'])
 }
}
