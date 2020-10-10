import { Comments } from "./../comments";
import { ApiService } from "./../api.service";
import { Component, OnInit } from "@angular/core";
import { ParticlesConfig } from "../landing/particles";
import { TeamService } from '../team.service';

declare var particlesJS: any;

@Component({
  selector: "app-our-team",
  templateUrl: "./our-team.component.html",
  styleUrls: ["./our-team.component.css"],
})
export class OurTeamComponent implements OnInit {
  constructor(private apiService: ApiService, private teamService: TeamService ) {}
  results;
  alumni: Comments[];
  
  
  ngOnInit(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    // this.apiService.getcomments().subscribe((data) => {
    //   this.results = data.data;
    //   console.log(this.results);
    // });

    this.results = this.teamService.teamData;
    
    this.alumni = this.apiService.Alumni;
    console.log(this.alumni);

    particlesJS("particles-js", ParticlesConfig, function () {
      console.log("callback - particles.js config loaded");
    });
  }
}
