import { Router } from "@angular/router";
import { ContactUsService } from "./../footer/contactus.service";
import { Component, OnInit } from "@angular/core";
import { ParticlesConfig } from "../landing/particles";
import { FormControl, FormGroup, Validators } from "@angular/forms";

declare var particlesJS: any;

@Component({
  selector: "app-registration-page",
  templateUrl: "./registration-page.component.html",
  styleUrls: ["./registration-page.component.css"],
})
export class RegistrationPageComponent implements OnInit {
  constructor(
    private _contactService: ContactUsService,
    private router: Router
  ) {}
  userprofileForms = new FormGroup({
    name: new FormControl("", [
      Validators.required,
      Validators.pattern("^[a-zA-Z ]*$"),
    ]),
    phoneNumber: new FormControl("", [
      Validators.required,
      Validators.pattern("^[0-9]{10,10}$"),
    ]),
    rollNumber: new FormControl("", [
      Validators.required,
      Validators.pattern("^[0-9]{13,13}$"),
    ]),
    branch: new FormControl("", Validators.required),
    studentNumber: new FormControl("", [
      Validators.required,
    ]),
    whatsappNumber: new FormControl("", [
      Validators.required,
      Validators.pattern("^[0-9]{10,10}$"),
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern("^[a-zA-Z0-9._%+-]+@akgec.ac.in$"),
    ]),
    skills: new FormControl("", Validators.required),
    github: new FormControl(""),
    behance: new FormControl(""),
    recaptchaReactive: new FormControl(
      "${captchaResponse}",
      Validators.required
    ),
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
          if (success.status == 1) {
            window.alert("Form submitted successfully");
            window.location.href = "./";
          } else {
            window.alert(success.error);
            this.userprofileForms.reset();
          }
        },
        (error) => {
          console.log(error);
          window.alert("Some error occured. Please try again later.");
        }
      );
    }
  }
}
