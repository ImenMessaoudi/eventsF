import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
 
@Injectable({
  providedIn: 'root'
})
export class ReservationService {
 
private url="http://localhost:8089/api/reservation";
  constructor(private http:HttpClient) { }

 addReservation(userId:any,eventId:any){
    return this.http.post<any>(this.url+'/user/'+userId+'/reservation/'+eventId,{})
 }

 
 getAllReservation (){
    return this.http.get<any>(this.url+'/users/reservations')
   }

   delete (id:any){
      return this.http.delete<any>(this.url+'/delete/'+id)
     }
  
     getReservation(start:any,endD:any){
      return this.http.get<any>(this.url+'/getReservation/'+start+'/'+endD)
     }
     
  getStatistique() {
   return this.http.get<any>(this.url + '/statistique');
 }
   
}
