import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-statistique-event',
  templateUrl: './statistique-event.component.html',
  styleUrls: ['./statistique-event.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StatistiqueEventComponent {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: any = [];
  barChartType: any = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: any = [
    { data: [], label: 'L\'event le plus réservé' }
  ];
  //Injection de dependance :permet de créér un code faiblement couplé
constructor(private eventService:EventService){}
//cycle de vie de componenet angular
ngOnInit(): void {
  this.eventService.getStat().subscribe(res=>{
    
    let i=0
    for(let i=0;i<res.length;i++){
        let arr=res[i];
        console.log(arr[0]);
        
        this.barChartLabels.push(arr[0].title)
       
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
