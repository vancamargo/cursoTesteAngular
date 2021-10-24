import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PhotoBoardService } from './photo-board.service';

describe(PhotoBoardService.name, () => {
  let service: PhotoBoardService;
  let httpController: HttpTestingController;

  const mockData = {
    api: 'http://localhost:3000/photos',
    data: [
      {
        id: 1,
        description: 'example 1',
        src: '',
      },
      {
        id: 2,
        description: 'example 2',
        src: '',
      },
    ],
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [PhotoBoardService],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    service = TestBed.inject(PhotoBoardService);
    httpController = TestBed.inject(HttpTestingController);
  });
  afterEach(() => httpController.verify());

  it(`#${PhotoBoardService.prototype.getPhotos.name} should return photos with description
  in uppercase`, (done) => {
    service.getPhotos().subscribe((photos) => {
      expect(photos[0].description).toBe('EXAMPLE 1');
      done();
    });
    httpController.expectOne(mockData.api).flush(mockData.data);
  });
});
