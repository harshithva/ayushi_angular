import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from "../landing/particles";

declare var particlesJS: any;

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    particlesJS("particles-js", ParticlesConfig, function () {
      console.log("callback - particles.js config loaded");
    });
  }

}
