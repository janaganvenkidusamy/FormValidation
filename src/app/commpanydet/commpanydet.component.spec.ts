import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommpanydetComponent } from './commpanydet.component';

describe('CommpanydetComponent', () => {
  let component: CommpanydetComponent;
  let fixture: ComponentFixture<CommpanydetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommpanydetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommpanydetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
