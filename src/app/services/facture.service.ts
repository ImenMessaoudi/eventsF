import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
 
@Injectable({
  providedIn: 'root'
})
export class FactureService {
 
private url="http://localhost:8089/api/facture";
  constructor(private http:HttpClient) { }

 addFacture(resId:any,id:any,sum:any){
    return this.http.post<any>(this.url+'/api/facture/'+resId+'/'+id,sum)
 }

 sendFacture(to:any,attechment:any){
  return this.http.post<any>(this.url+'/sendFacture/'+attechment,to)
}

   
}
