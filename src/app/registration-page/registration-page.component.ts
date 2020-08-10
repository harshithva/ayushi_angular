import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from "../landing/particles";

declare var particlesJS: any;

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    particlesJS("particles-js", ParticlesConfig, function () {
      console.log("callback - particles.js config loaded");
    });
  }

}
