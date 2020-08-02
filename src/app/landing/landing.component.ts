import { Component, OnInit } from "@angular/core";
import { ParticlesConfig } from "./particles";

declare var particlesJS: any;

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.css"],
})
export class LandingComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    particlesJS("particles-js", ParticlesConfig, function () {
      console.log("callback - particles.js config loaded");
    });
  }
}
