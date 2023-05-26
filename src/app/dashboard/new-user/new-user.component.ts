import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { EventService } from 'src/app/services/event.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewUserComponent {
   userForm !:FormGroup;
 
elm:any= HTMLElement;
isLoged:any;
user:any;
modalTitle=''
events:any=[]
id:any=''
constructor(private fb:FormBuilder,private toast: HotToastService,private userService:UserService){}
ngOnInit() {
 
  
  this.userForm=this.fb.group({
  
           
          username:['',Validators.required],
        email:['',Validators.required],
        firstName:['',Validators.required],
        lastName:['',Validators.required],
        phone:['',Validators.required],
        password:['',Validators.required],

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
onSubmit(){ 
 console.log(this.userForm.value);
 let data={
  username:this.userForm.value.username,
  email:this.userForm.value.email,
  firstName:this.userForm.value.firstName,
  lastName:this.userForm.value.lastName,
  phone:this.userForm.value.phone,
  password:this.userForm.value.password,
  role:["admin"]
 }

 this.userService.addUser(data).subscribe(res=>{
  this.toast.success('User added with success')
 },(error=>{
  this.toast.error(error.error.message)
 }))
}  
}
