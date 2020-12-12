import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsaComponent } from './postsa.component';

describe('PostsaComponent', () => {
  let component: PostsaComponent;
  let fixture: ComponentFixture<PostsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
