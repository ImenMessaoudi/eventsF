import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfilComponent {
  userForm!:FormGroup;
  constructor(private fb:FormBuilder,private userService:UserService,private toast: HotToastService){}
  ngOnInit() {
    this.userForm=this.fb.group({
      username:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
     firstName:['',Validators.required],
     lastName:['',Validators.required],
    phone:['',Validators.required]
   

    })
  this.userService.getUser(localStorage.getItem('id')).subscribe(res=>{
    this.userForm.patchValue({
      username:res.username,
      email:res.email,
    
      firstName:res.firstName,
      lastName:res.lastName,
      phone:res.phone,
    })

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
    this.userService.update(localStorage.getItem('id'),this.userForm.value).subscribe(res=>{
      this.toast.success('User updated with success')
    })
    
  }
}
