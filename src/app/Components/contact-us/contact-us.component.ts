import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ScrollReveal from 'scrollreveal';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements AfterViewInit {
  form: FormGroup;
  private sr!: typeof ScrollReveal;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      aboutUs: [''],
      message: ['']
    });
  }

  ngAfterViewInit() {
    this.sr = ScrollReveal();

    this.sr.reveal('.section_info', {
      origin: 'left',
      distance: '150px',
      duration: 2000,
      delay: 2000,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      scale: 1,
      viewFactor: 0.5,
    });

    this.sr.reveal('.animateinput1', {
      origin: 'bottom',
      distance: '150px',
      duration: 2000,
      delay: 2000,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      scale: 1,
      viewFactor: 0.5,
    });

    this.sr.reveal('.animateinput2', {
      origin: 'top',
      distance: '150px',
      duration: 2000,
      delay: 2000,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      scale: 1,
      viewFactor: 0.5,
    });

    this.sr.reveal('.animateinput3', {
      origin: 'left',
      distance: '150px',
      duration: 2000,
      delay: 2000,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      scale: 1,
      viewFactor: 0.5,
    });

    this.sr.reveal('.animateinput4', {
      origin: 'right',
      distance: '150px',
      duration: 2000,
      delay: 2000,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      scale: 1,
      viewFactor: 0.5,
    });

    this.sr.reveal('.msg', {
      origin: 'bottom',
      distance: '150px',
      duration: 2000,
      delay: 2000,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      scale: 1,
      viewFactor: 0.5,
    });

    this.sr.reveal('.section_btn', {
      origin: 'bottom',
      distance: '150px',
      duration: 2000,
      delay: 2000,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      scale: 1,
      viewFactor: 0.5,
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







