import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-statistique-reservation',
  templateUrl: './statistique-reservation.component.html',
  styleUrls: ['./statistique-reservation.component.css']
})
export class StatistiqueReservationComponent {

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: any = [];
  barChartType: any = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: any = [
    { data: [], label: 'Les utilisateur  le plus réservé' }
  ];
  
constructor(private reservationService:ReservationService){

}

ngOnInit(): void {


  this.reservationService.getStatistique().subscribe(res=>{
    
    let i=0
    for(let i=0;i<res.length;i++){
        let arr=res[i];
        console.log(arr[0]);
        
        this.barChartLabels.push(arr[0].username)
       
        this.barChartData[0].data.push(arr[1])

        console.log(this.barChartData);
        console.log(this.barChartLabels);
        
       
         
        
      
      
    }
    
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
}
