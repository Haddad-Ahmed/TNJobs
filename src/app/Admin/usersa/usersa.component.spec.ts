import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersaComponent } from './usersa.component';

describe('UsersaComponent', () => {
  let component: UsersaComponent;
  let fixture: ComponentFixture<UsersaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
