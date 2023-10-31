import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResisterComponent } from './resister.component';

describe('ResisterComponent', () => {
  let component: ResisterComponent;
  let fixture: ComponentFixture<ResisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResisterComponent]
    });
    fixture = TestBed.createComponent(ResisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
