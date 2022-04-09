import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConchComponent } from './conch.component';

describe('ConchComponent', () => {
  let component: ConchComponent;
  let fixture: ComponentFixture<ConchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
