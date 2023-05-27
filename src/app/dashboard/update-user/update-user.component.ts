import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UpdateUserComponent {
  userForm !:FormGroup;

elm:any= HTMLElement;
isLoged:any;
user:any;
modalTitle=''
events:any=[]
id:any=''
constructor(private router:Router,private route: ActivatedRoute,private fb:FormBuilder,
  private toast: HotToastService,private userService:UserService){}
ngOnInit() {

  this.id = this.route.snapshot.paramMap.get('id');

  
 this.userForm=this.fb.group({
 
          
         username:['',Validators.required],
       email:['',Validators.required],
       firstName:['',Validators.required],
       lastName:['',Validators.required],
       phone:['',Validators.required],
       password:['',Validators.required],

 })
 this.userService.getUser(this.id).subscribe(res=>{
     
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
 
this.userService.update(this.id,this.userForm.value).subscribe(res=>{
 this.toast.success('User updated with success')
  this.router.navigate(['/list-membre'])
},(error=>{
 this.toast.error(error.error.message)
}))
}  
}
