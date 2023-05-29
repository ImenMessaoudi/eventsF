import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
 import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-membre',
  templateUrl: './list-membre.component.html',
  styleUrls: ['./list-membre.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListMembreComponent implements OnInit,OnDestroy{
  users:any=[]
  p: number = 1;
  constructor(private userService:UserService,private toast: HotToastService){}
  ngOnInit() {
  this.getAll()
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
  desactive(id){

    this.userService.desactive(id).subscribe(res=>{
this.toast.success('Account desactive')
this.getAll()
    })
  }
  active(id){

    this.userService.active(id).subscribe(res=>{
this.toast.success('Account active')
this.getAll()
    })
  }
  getAll(){
    this.userService.getAll().subscribe(res=>{
     this.users=res
    })
  }
  delete(id){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.delete(id).subscribe(res=>{
          this.toast.success('Membre deleted with success!!');
      this.getAll()
        })
      }
    })
  }
 
  deleteuser(id){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.userService.delete(id).subscribe(res=>{
        this.toast.success('User deleted with success!!');
    this.getAll()
      })
    }
  })
 }
}

 
