import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
 
@Injectable({
  providedIn: 'root'
})
export class PayementService {
 
private url="http://localhost:8089/api/payement";
  constructor(private http:HttpClient) { }

 getStat(){
    return this.http.get<any>(this.url+'/getStatistique')
   }
   getAllPayment(){
    return this.http.get<any>(this.url+'/getPayements')
   }

   updateStatus(id:any){
    return this.http.get<any>(this.url+'/updateStatus/'+id)
   }

}
