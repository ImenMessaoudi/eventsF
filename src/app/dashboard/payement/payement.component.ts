import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { PayementService } from 'src/app/services/payement.service';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.css']
})
export class PayementComponent {

  paymentHandler: any = null;
  eventT:any;
  reservations:any;
 
  payements?:any;
  reservation:any
  totala:any=0;
  date:any;
  id:any
  p: number = 1;
  total:any=0;
  constructor( private payementService:PayementService,private toast: HotToastService,private router: Router) {}
  ngOnInit() {
    this.invokeStripe();
    this.id=localStorage.getItem('id')
    
    this.date=Date.now()
    this.getAll()


const element1 = document.getElementById("header1");
element1.setAttribute("hidden","true");
const element2 = document.getElementById("ftco-footer");
element2.setAttribute("hidden","true");
}

makePayment(id: any) {
  this.toast.success("Payé avec success")
  this.payementService.updateStatus(id).subscribe(res=>{
    this.getAll()
  })
this.reservation=this.payements.filter(item=>item.id==id);
console.log(this.reservation);

  const paymentHandler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_51NMCEWHDx5bfiokZNuDPg3ByjbPBGVu6QHqEJMpZtFnrEoZjKMkZtl01uUhGCQ5z7UNNeZbBMyIYqwqyPhRnWuNV0028S4DcCJ',
    locale: 'auto',
    token: function (stripeToken: any) {
    
    },
  });
  paymentHandler.open({
    name: "Payement of event : "+this.reservation[0].reservation.event.title,
    description: this.reservation[0].reservation.activites.length + "Activities(Payé)",
    amount: this.reservation[0].sum * 100,
  });
  
}
getAll(){
  
this.payementService.getAllPayment().subscribe(res=>{
  this.payements=res;
})
}
ngOnDestroy() {
const element1 = document.getElementById("header1");
element1.removeAttribute("hidden");
const element2 = document.getElementById("ftco-footer");
element2.removeAttribute("hidden");
}
 
 
  

invokeStripe() {
  if (!window.document.getElementById('stripe-script')) {
    const script = window.document.createElement('script');
    script.id = 'stripe-script';
    script.type = 'text/javascript';
    script.src = 'https://checkout.stripe.com/checkout.js';
    script.onload = () => {
      this.paymentHandler = (<any>window).StripeCheckout.configure({
        key: 'pk_tespk_test_51NMCEWHDx5bfiokZNuDPg3ByjbPBGVu6QHqEJMpZtFnrEoZjKMkZtl01uUhGCQ5z7UNNeZbBMyIYqwqyPhRnWuNV0028S4DcCJt_51H7bbSE2RcKvfXD4DZhu',
        locale: 'auto',
        token: function (stripeToken: any) {
          console.log(stripeToken);
          alert('Payment has been successfull!');
        },
      });
    };
    window.document.body.appendChild(script);
  }
}
 



logout(){
  localStorage.removeItem('id')
  localStorage.removeItem('token')
  this.router.navigate(['/login'])
}
 
 
}

