import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MovieDbService } from 'src/app/data/movie-db.service';
import { ImagePipe } from 'src/app/pipes/image.pipe';
import { MovieDetailComponent } from '../movie/movie-detail.component';

@Component({
  selector: 'app-inline-modals',
  templateUrl: './inline-modals.page.html',
  styleUrls: ['./inline-modals.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImagePipe,
    MovieDetailComponent,
  ],
  providers: [MovieDbService],
})
export class InlineModalsPage implements OnInit {
  private readonly movieDbService = inject(MovieDbService);
  detailOpened = false;

  readonly movies$ = this.movieDbService.movies$;

  ngOnInit() {
    this.movies$.subscribe(console.log);
  }
}
