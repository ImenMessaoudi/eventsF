import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
 
@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
 
private url="http://localhost:8089/api/reclamation";
  constructor(private http:HttpClient) { }

 addReclamation(username:any,resource:any){
    return this.http.post<any>(this.url+'/users/'+username+'/reclamation',resource)
 }
 getReclamatioByUser(id:any){
  return this.http.get<any>(this.url+'/users/'+id+'/reclamations')
 }
   
 filterReclamation(start:any,end:any){
  return this.http.get<any>(this.url+'/filterByDate/'+start+'/'+end)
 }
}
