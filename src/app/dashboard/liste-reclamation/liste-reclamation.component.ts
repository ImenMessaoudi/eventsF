import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-liste-reclamation',
  templateUrl: './liste-reclamation.component.html',
  styleUrls: ['./liste-reclamation.component.css']
})
export class ListeReclamationComponent {

  reclamations:any=[]
  id:any;
  p: number = 1;
    constructor(private route:ActivatedRoute,private reclamationService:ReclamationService){
  
    }
    ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
  
      this.reclamationService.getReclamatioByUser(this.id).subscribe(res=>{
        this.reclamations=res
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
  