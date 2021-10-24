import { PhotoBoardService } from './shared/components/photo-board/services/photo-board.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from './shared/components/photo-board/Interface/photos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public photos$: Observable<Photo[]>;

  constructor(private service: PhotoBoardService) {
    this.photos$ = service.getPhotos();
  }
}
