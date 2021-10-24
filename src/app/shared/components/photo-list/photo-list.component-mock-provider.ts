import { PhotoBoardService } from './../photo-board/services/photo-board.service';
import { HttpClientModule } from '@angular/common/http';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';
import { buildPhotoList } from '../photo-board/test/build-photo-list';
import { Observable, of } from 'rxjs';
import { Photo } from '../photo-board/Interface/photos';
import { PhotoBoardMockService } from '../photo-board/services/photo-board-mock.service';

let fixture: ComponentFixture<PhotoListComponent>;
let component: PhotoListComponent;

describe(PhotoListComponent.name + 'Mock Provider', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoListModule, HttpClientModule],
      providers: [
        {
          provide: PhotoBoardService,
          useClass: PhotoBoardMockService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
  });

  it('Shoult create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should display board when data arrives', () => {
    const photos = buildPhotoList();
    fixture.detectChanges();
    const board = fixture.nativeElement.querySelector('app-photo-board');
    const loader = fixture.nativeElement.querySelector('.loader');
    expect(board).withContext('Should not display board').toBeNull();
    expect(loader).withContext('Should not display loader').not.toBeNull();
  });
});
