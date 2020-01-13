import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeAndTheBrosComponent } from './me-and-the-bros.component';

describe('MeAndTheBrosComponent', () => {
  let component: MeAndTheBrosComponent;
  let fixture: ComponentFixture<MeAndTheBrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeAndTheBrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeAndTheBrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
