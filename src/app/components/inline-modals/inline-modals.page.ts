import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MovieDbService } from 'src/app/data/movie-db.service';

@Component({
  selector: 'app-inline-modals',
  templateUrl: './inline-modals.page.html',
  styleUrls: ['./inline-modals.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  providers: [MovieDbService],
})
export class InlineModalsPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
