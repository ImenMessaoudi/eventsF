import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HotToastService } from '@ngneat/hot-toast';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-in1',
  templateUrl: './sign-in1.component.html',
  styleUrls: ['./sign-in1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignIn1Component implements OnInit {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService,
    private router: Router, private toast: HotToastService,private userService:UserService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]

    })
    const element1 = document.getElementById("header1");
    element1.removeAttribute("hidden");
    const element2 = document.getElementById("ftco-footer");
    element2.removeAttribute("hidden");
  }


  onSubmit() {
    console.log(this.loginForm.value);



    this.authService.login(this.loginForm.value).subscribe((res: any) => {


      localStorage.setItem('id', res.id);
      localStorage.setItem('token', res.accessToken)
      this.router.navigate(['/profil'])
      this.userService.nbIteration(res.id).subscribe(res=>{
       
      })

    }, (error: any) => {


      this.toast.error(error.error.message);

      this.userService.updateBlocked(this.loginForm.value.username).subscribe(res=>{
      })
    })
    //send the object to database


  }

}
