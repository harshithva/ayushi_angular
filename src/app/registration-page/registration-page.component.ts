import { ContactUsService } from './../footer/contactus.service';
import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from '../landing/particles';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare var particlesJS: any;

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  constructor(    private _contactService: ContactUsService,
    ) { }
  userprofileForms = new FormGroup({
    name: new FormControl('', Validators.pattern('^[a-zA-Z]*$')),
    phoneNumber: new FormControl('', Validators.pattern('^[0-9]*$')),
    rollNumber: new FormControl('', Validators.required),
    branch: new FormControl('', Validators.required),
    studentNumber: new FormControl('', Validators.required),
    whatsappNumber: new FormControl('', Validators.pattern('^[0-9]*$')),
    email: new FormControl('', Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')),
    skills: new FormControl('', Validators.required),
    github: new FormControl('', Validators.required),
    behance: new FormControl('', Validators.required),
    recaptchaReactive: new FormControl('${captchaResponse}', Validators.required),
  });

  ngOnInit() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    particlesJS("particles-js", ParticlesConfig, function () {
      console.log("callback - particles.js config loaded");
    });
  }
  resolved(captchaResponse: string, res) {
    console.log(`Resolved response token: ${captchaResponse}`);
  }

  onSubmit() {
    console.log(this.userprofileForms.value);
    if (this.userprofileForms.valid) {
      this._contactService.registration(this.userprofileForms.value).subscribe(
        (success) => {
          console.log("Form Submitted");
          console.log(success);
          this.userprofileForms.reset();
        },
        (error) => {
          console.log("Error sending data!");
        }
      );
    }
  }

}
