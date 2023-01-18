import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedButtonBookComponent } from './shared-button-book.component';

describe('SharedButtonBookComponent', () => {
  let component: SharedButtonBookComponent;
  let fixture: ComponentFixture<SharedButtonBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedButtonBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedButtonBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
