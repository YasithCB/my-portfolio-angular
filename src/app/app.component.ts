import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-portfolio-angular';
  currentPage = 'home';

  onNavigate(navPage: string) {
    this.currentPage = navPage;
  }
}
