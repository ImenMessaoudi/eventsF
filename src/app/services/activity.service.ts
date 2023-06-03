import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
 
@Injectable({
  providedIn: 'root'
})
export class ActivityService {
 
private url="http://localhost:8089/api/activity";
  constructor(private http:HttpClient) { }

 addEvents(id:any,resource:any){
    return this.http.post<any>(this.url+'/events/'+id+'/activity',resource)
 }

 
 getActivityByEvent(id:any){
    return this.http.get<any>(this.url+'/events/'+id+'/activity')
   }

}
