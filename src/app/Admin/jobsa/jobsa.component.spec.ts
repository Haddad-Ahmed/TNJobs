import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsaComponent } from './jobsa.component';

describe('JobsaComponent', () => {
  let component: JobsaComponent;
  let fixture: ComponentFixture<JobsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
