import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private _hidden = false;

  constructor() {}

  hidden(): boolean {
    return this._hidden;
  }

  hideImg(): void {
    this._hidden = true;
  }
}
