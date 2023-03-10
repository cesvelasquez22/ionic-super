import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
})
export class AppComponent {
  public appPages = [
    { title: 'Inline Modals', url: '/components/inline-modals', icon: 'mail' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
