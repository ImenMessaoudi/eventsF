import { Component, ViewEncapsulation } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { EventService } from 'src/app/services/event.service';
import { FactureService } from 'src/app/services/facture.service';
import * as html2pdf from 'html2pdf.js' 
import { ReservationService } from 'src/app/services/reservation.service';
@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FactureComponent {
  reservations:any;
  reservation?:any;
  date:any

  constructor(private eventsService:EventService,private reservatioService:ReservationService,
    private factureService:FactureService,private toast: HotToastService) {}
  ngOnInit() {

    this.date=Date.now()
this.reservatioService.getAllReservation().subscribe(res=>{
  this.reservations=res;
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
create(id){
  let data={
    payement:"chéque"
    
  }
id=1;
  this.factureService.addFacture(id,data).subscribe(res=>{

this.toast.success('Voucher created with success')
  })

  
}

public voucher(id): void {  
console.log(id);

  this.reservation=this.reservations.filter(res=>
      res.reservationId==id
  )
  this.reservation=this.reservation[0]
  console.log(this.reservation);
  
 
  const option ={
    filename:"Voucher-"+Date.now()+".pdf",
    image:{
      type:'jpeg'
    },
    html2canavas:{},
    jsPDF:{orientation:'portrait'}

  };
  const content : Element=document.getElementById('content')
    html2pdf().from(content).set(option).save()
}
}
