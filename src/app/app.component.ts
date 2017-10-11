import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  hidden: boolean = false;

  constructor() {}

  hideImg(): void {
    this.hidden = true;
  }
}
