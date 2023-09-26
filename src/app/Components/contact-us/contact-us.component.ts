import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GsapService } from 'src/app/Shared/Services/gsap.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements AfterViewInit {
  form: FormGroup;


  constructor(private fb: FormBuilder, private gsapService: GsapService) {
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

  ngAfterViewInit() {
    const animateFromLeftContact = document.querySelector('.animateFromLeftContact') as HTMLElement;
    const animateFromRightContact = document.querySelector('.animateFromRightContact') as HTMLElement;
    const animateFromTopContact = document.querySelector('.animateFromTopContact') as HTMLElement;
    const animateFromBottomContact = document.querySelector('.animateFromBottomContact') as HTMLElement;


    if (animateFromLeftContact) {
      this.gsapService.animateFromLeft(animateFromLeftContact);
    }

    if(animateFromRightContact) {
      this.gsapService.animateFromRight(animateFromRightContact);
    }

    if(animateFromTopContact) {
      this.gsapService.animateFromTop(animateFromTopContact);
    }

    if(animateFromBottomContact) {
      this.gsapService.animateFromBottom(animateFromBottomContact);
    }

  }

}







