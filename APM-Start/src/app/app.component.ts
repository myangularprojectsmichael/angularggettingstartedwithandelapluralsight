import { Component } from '@angular/core';


@Component({
  selector: 'pm-root', // no longer needed
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Acme Product management';
}
