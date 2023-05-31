import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
private url="http://localhost:8089/api/user";
  constructor(private http:HttpClient) { }

 getUser(id:any){
    return this.http.get<any>(this.url+'/get-user/'+id)
 }

 getAll(){
    return this.http.get<any>(this.url+'/get-users')
 }
 update(id:any,resource:any){
    return this.http.put<any>(this.url+'/update-user/'+id,resource)
 }

 active(id){
    return this.http.put<any>(this.url+'/active-user/'+id,{})
 }
 desactive(id){
    return this.http.put<any>(this.url+'/desactive-user/'+id,{})
 }
 delete(id){
    return this.http.delete<any>(this.url+'/delete-user/'+id)  
 }
 addUser(resource:any){

 return  this.http.post<any>(this.url+'/new-user',resource)
 }
 search(value:any){
   return this.http.get<any>(this.url+'/search/'+value )
 }
}
