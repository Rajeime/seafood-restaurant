import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobsterComponent } from './lobster.component';

describe('LobsterComponent', () => {
  let component: LobsterComponent;
  let fixture: ComponentFixture<LobsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LobsterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LobsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
