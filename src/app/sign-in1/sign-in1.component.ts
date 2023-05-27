import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-sign-in1',
  templateUrl: './sign-in1.component.html',
  styleUrls: ['./sign-in1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignIn1Component implements OnInit {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService,
    private router: Router, private toast: HotToastService) { }

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

    }, (error: any) => {


      this.toast.error(error.error.message)
    })
    //send the object to database


  }

}
