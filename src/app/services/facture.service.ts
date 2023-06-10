import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
 
@Injectable({
  providedIn: 'root'
})
export class FactureService {
 
private url="http://localhost:8089/api/facture";
  constructor(private http:HttpClient) { }

 addFacture(id:any,resId:any,resource:any){
    return this.http.post<any>(this.url+'/users/'+id+'/facture/'+resId,resource)
 }

 sendFacture(to:any,attechment:any){
  return this.http.post<any>(this.url+'/sendFacture/'+attechment,to)
}

   
}
