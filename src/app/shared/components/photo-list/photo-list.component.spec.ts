import { PhotoBoardService } from './../photo-board/services/photo-board.service';
import { HttpClientModule } from '@angular/common/http';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';
import { buildPhotoList } from '../photo-board/test/build-photo-list';
import { of } from 'rxjs';

let fixture: ComponentFixture<PhotoListComponent>;
let component: PhotoListComponent;
let service: PhotoBoardService;

describe(PhotoListComponent.name, () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoListModule, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PhotoBoardService);
  });

  it('Shoult create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should display board when data arrives', () => {
    const photos = buildPhotoList();
    spyOn(service, 'getPhotos').and.returnValue(null);
    fixture.detectChanges();
    const board = fixture.nativeElement.querySelector('app-photo-board');
    const loader = fixture.nativeElement.querySelector('.loader');
    expect(board).withContext('Should not display board').toBeNull();
    expect(loader).withContext('Should not display loader').not.toBeNull();
  });
});
