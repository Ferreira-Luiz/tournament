import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  form: FormGroup;


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      aboutUs: [''],
      message: ['']
    });
  }



  sendForm() {
    if(this.form.valid){
      Swal.fire("Thank you!", "Your message has been sent", "success");
    }else if(!this.form.valid){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please check your data',
      })
  }
}

}







