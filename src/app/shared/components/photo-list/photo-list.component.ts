import { PhotoBoardService } from './../photo-board/services/photo-board.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { Photo } from '../photo-board/Interface/photos';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent {
  public photos$: Observable<Photo[]>;
  public fa = { faCircleNotch };

  constructor(private service: PhotoBoardService) {
    this.photos$ = this.service.getPhotos();
  }
}
