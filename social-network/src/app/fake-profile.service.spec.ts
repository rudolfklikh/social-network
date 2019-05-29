import { TestBed } from '@angular/core/testing';

import { FakeProfileService } from './fake-profile.service';

describe('FakeProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FakeProfileService = TestBed.get(FakeProfileService);
    expect(service).toBeTruthy();
  });
});
