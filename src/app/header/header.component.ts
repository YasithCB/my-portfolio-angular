import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() selectedNavPage = new EventEmitter<string>();

  onSelectNav(navPage: string) {
    this.selectedNavPage.emit(navPage);
  }
}
