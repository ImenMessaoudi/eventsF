import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
private url="http://localhost:8089/api/auth";
  constructor(private http:HttpClient) { }

 login(resource:any){
    return this.http.post<any>(this.url+'/signin',resource)
 }

 register(resource){
    return this.http.post<any>(this.url+'/new-user',resource)
 }
 
}
