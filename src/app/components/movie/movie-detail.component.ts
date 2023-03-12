import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IonicModule, IonModal } from '@ionic/angular';
import { ImagePipe } from 'src/app/pipes/image.pipe';
import { Movie } from 'src/app/types/movies.types';

@Component({
  selector: '[app-movie-detail]',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  exportAs: 'appMovieDetail',
  standalone: true,
  imports: [CommonModule, IonicModule, ImagePipe],
})
export class MovieDetailComponent implements OnInit {
  @Input() movie!: Movie;

  @ViewChild(IonModal) modal!: IonModal;

  isOpen = false;

  elementRef = inject(ElementRef);

  get nativeElement() {
    return this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.nativeElement.id = this.movie.id;
  }

  dismiss() {
    this.modal.dismiss(null, 'cancel');
  }
}
