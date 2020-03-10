import { TestBed } from '@angular/core/testing';

import { NewsfeedService } from './newsfeed.service';

describe('NewsfeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsfeedService = TestBed.get(NewsfeedService);
    expect(service).toBeTruthy();
  });
});
