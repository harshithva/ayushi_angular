import { Comments } from './../comments';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  results: Comments[];

  ngOnInit(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.apiService.getcomments()
    .subscribe(
      data => {
        this.results = data.data;
        console.log(this.results);
      }
    );
  }

}
