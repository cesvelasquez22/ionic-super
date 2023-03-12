import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, HttpClientModule],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Inline Modals',
      url: '/components/inline-modals',
      icon: 'chatbox',
    },
  ];
  public labels = [
    'Light/dark mode',
    'Media watcher',
    'List views',
    'Virtual scrolling',
    'Alerts service',
  ];
  constructor() {}
}
