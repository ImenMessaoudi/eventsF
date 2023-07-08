import {Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
 
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-like-event',
  templateUrl: './like-event.component.html',
  styleUrls: ['./like-event.component.css']
})
export class LikeEventComponent {

  displayedColumns = ['id', 'firstName', 'lastName', 'username'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  id:any
  constructor( private route:ActivatedRoute,private router: Router,
    private eventService:EventService){}
    ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.eventService.getEvent(this.id).subscribe(res=>{
        this.dataSource = new MatTableDataSource(res.likes);
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
  logout(){
    localStorage.removeItem('id')
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
   }

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
