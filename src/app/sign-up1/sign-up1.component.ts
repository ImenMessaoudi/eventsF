import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-sign-up1',
  templateUrl: './sign-up1.component.html',
  styleUrls: ['./sign-up1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignUp1Component implements OnInit{
  registerForm!:FormGroup;
   constructor(private fb:FormBuilder,private authService:AuthService,
    private router:Router,private toast: HotToastService ) { }

  ngOnInit() {
    this.registerForm=this.fb.group({
      username:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]

    })
}
onSubmit(){
if(this.registerForm.valid){

  let resource={
    email:this.registerForm.value.email,
    username:this.registerForm.value.username,
    password:this.registerForm.value.password,
    role:["membre"]
  }
  this.authService.register(resource).subscribe(res=>{
    this.toast.success('Request send with success')
  },(error=>{
    this.toast.error(error.error.message)
  }))
}
}
}
