import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {  Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ForgetPasswordComponent  {
  email:any;

  constructor(private userService:UserService, private toast: HotToastService,private router:Router){}

  reset(){
    if(this.email==''){
      this.toast.error("Entre votre email")
    }else{
      this.userService.forgetPassword(this.email).subscribe(res=>{
        this.toast.success("Email envoyé avec success")
        this.router.navigate(['reset-password'])
      },(error=>{
        this.toast.error("Email n'existe pas")
      }))
    }
  }
}