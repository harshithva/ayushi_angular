import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    let loader = this.renderer.selectRootElement('#loader__main');
    this.renderer.setStyle(loader, 'display', 'none');
  }
}
