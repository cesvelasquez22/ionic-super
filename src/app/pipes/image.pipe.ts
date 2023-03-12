import { Pipe, PipeTransform, inject } from '@angular/core';
import { ENV_CONFIG } from 'src/environments/environment.config';

@Pipe({
  name: 'image',
  standalone: true,
})
export class ImagePipe implements PipeTransform {
  private readonly environment = inject(ENV_CONFIG);
  transform(name: string, size = 'w500'): string {
    if (!name) {
      return 'assets/no-image-banner.jpg';
    }
    return `${this.environment.MOVIEDB_IMG_URL}/${size}${name}`;
  }
}
