import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaldetComponent } from './personaldet.component';

describe('PersonaldetComponent', () => {
  let component: PersonaldetComponent;
  let fixture: ComponentFixture<PersonaldetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaldetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaldetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
