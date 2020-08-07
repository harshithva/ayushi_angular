import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  Validators,
  FormGroupDirective,
  NgForm,
} from "@angular/forms";
import { ContactUsService } from "./contactus.service";
declare var $: any;

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private _contactService: ContactUsService,
    private router: Router
  ) {}
webVal=1;
  contactForm = this.fb.group({
    web: [this.webVal],
    name: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    subject: ["", [Validators.required]],
    message: ["", [Validators.required]],
    recaptchaReactive: ["${captchaResponse}", [Validators.required]],
  });

  contactFormSubmit = this.fb.group({
    default: [1],
    subject: [""],
    body: [""],
  });

  resolved(captchaResponse: string, res) {
    console.log(`Resolved response token: ${captchaResponse}`);
  }

  ngOnInit() {}
  get fval() {
    return this.contactForm.controls;
  }

  onSubmit(form) {
    this.contactFormSubmit.value.subject = this.contactForm.value.subject;
    this.contactForm.value;
    console.log(this.contactForm.value);
    if (this.contactForm.valid) {
      this._contactService.register(this.contactForm.value).subscribe(
        (success) => {
          console.log("Form Submitted");
          console.log(success);
          form.resetForm();
          $("#contactUs").modal("hide");
        },
        (error) => {
          console.log("Error sending data!");
        }
      );
    }
  }
}
