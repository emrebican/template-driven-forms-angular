import { Component } from '@angular/core';

interface INav {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nav: INav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/badroute',
      name: 'Bad Route',
      exact: true
    },
    {
      link: '/pokemon',
      name: 'Pokemon',
      exact: true
    }
  ];
}
