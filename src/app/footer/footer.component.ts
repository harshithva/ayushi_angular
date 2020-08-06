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
    private _contactService: ContactUsService
  ) {}

  contactForm = this.fb.group({
    name: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    subject: ["", [Validators.required]],
    body: ["", [Validators.required]],
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
    this.contactFormSubmit.value.body =
      "<h1>" +
      this.contactForm.value.name +
      " </h1><br><h2>" +
      this.contactForm.value.email +
      " </h2><br><p>" +
      this.contactForm.value.body +
      " </p>";
    console.log(this.contactFormSubmit.value);
    if (this.contactForm.valid) {
      this._contactService.register(this.contactFormSubmit.value).subscribe(
        (success) => {
          console.log("Form Submitted");
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
