import { Component, ViewEncapsulation } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { EventService } from 'src/app/services/event.service';
import { FactureService } from 'src/app/services/facture.service';
import * as html2pdf from 'html2pdf.js' 
import { ReservationService } from 'src/app/services/reservation.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FactureComponent {
  eventT:any;
  reservations:any;
  searchBydateForm!:FormGroup;
  reservation?:any;
  totala:any=0;
  totalF:any=0;
  date:any;
  id:any
  p: number = 1;
  total:any=0;
  constructor(private fb:FormBuilder,private eventsService:EventService,private reservatioService:ReservationService,
    private factureService:FactureService,private toast: HotToastService,private router: Router) {}
  ngOnInit() {
    this.searchBydateForm=this.fb.group({
      start:['',Validators.required],
      end:['',Validators.required]
  
    })

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
delete(id:any){
console.log(id);

  
 
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
        this.reservatioService.delete(id).subscribe(res=>{
          this.toast.success('Réservation rejecter with success!!');
      this.getAll()
        })
      }
    })
  }
 
  

 
create(id){
  
this.totalF=0

this.reservation=this.reservations.filter(res=>
    res.id==id
)
this.reservation=this.reservation[0]

this.eventT=this.reservation.event.title
this.reservation?.activites.forEach(element => {

  
  this.totalF=element.montant+this.totalF;
  console.log(this.totalF);
  
  
});
  console.log(id);
  
  let data={
    payement:"chéque"
    
  }
 
  
  this.reservation=this.reservations.filter(res=>
    res.id==id
)
this.reservation=this.reservation[0]
console.log(this.reservation.user.id);

  this.factureService.addFacture(id,this.reservation.user.id,this.totalF).subscribe(res=>{

this.toast.success('Reservation created with success');
this.getAll()
  })

  


  
}

public voucher(id): void {  

  this.eventT="";

this.total=0

  this.reservation=this.reservations.filter(res=>
      res.id==id
  )
  this.reservation=this.reservation[0]

  this.eventT=this.reservation.event.title
  this.reservation?.activites.forEach(element => {
 
    
    this.total=element.montant+this.total;
    console.log(this.total);
    
    
  });

 console.log(this.reservation.user.email);
 
  const option ={
    filename:"Voucher-"+Date.now()+".pdf",
    image:{
      type:'jpeg'
    },
    html2canavas:{},
    jsPDF:{orientation:'portrait'}

  };
  console.log(option.filename);
  const content : Element=document.getElementById('content')
    html2pdf().from(content).set(option).save()

    setTimeout(() => {
      this.factureService.sendFacture(this.reservation.user.email,option.filename).subscribe(res=>{
        this.toast.success("Facture envoyé avec success")
      })
    }, 3000)
    
}

serachbyDate(){

  this.reservatioService.getReservation(this.searchBydateForm.value.start,this.searchBydateForm.value.end).subscribe(res=>{
    this.reservations=res
  })
}

logout(){
  localStorage.removeItem('id')
  localStorage.removeItem('token')
  this.router.navigate(['/login'])
 }
}
