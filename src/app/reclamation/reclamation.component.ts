import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import Swal from 'sweetalert2';
import { ReclamationService } from '../services/reclamation.service';
@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent {
  reclamationForm!: FormGroup;
  id:any;
  constructor(private fb: FormBuilder, private reclamationService: ReclamationService,
    private router: Router, private toast: HotToastService) { }

  ngOnInit(): void {

    this.id=localStorage.getItem('id');
    
    this.reclamationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      content: ['', Validators.required]

    })
  } 
  
  onSubmit(){
    let resource={
      subject:this.reclamationForm.value.subject,
      content:this.reclamationForm.value.content,
    }
    this.reclamationService.addReclamation(this.reclamationForm.value.username,resource).subscribe(res=>{
      this.reclamationForm.reset();
      this.toast.success('Your reclamation send with success')
    },(error)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You should connecte!',
        footer: '<a href="/login">Signin</a>'
      })
      
    })
  }

}
