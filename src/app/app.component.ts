import { Component } from '@angular/core';
import * as AOS from 'aos';
import { Renderer2 } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website';
  constructor(private renderer: Renderer2){}
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    AOS.init();
  }

  ngAfterViewInit(){
    let loader = this.renderer.selectRootElement('#loader__main');
    this.renderer.setStyle(loader, 'display', 'none');
  }


}
