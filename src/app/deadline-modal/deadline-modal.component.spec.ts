import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadlineModalComponent } from './deadline-modal.component';

describe('DeadlineModalComponent', () => {
  let component: DeadlineModalComponent;
  let fixture: ComponentFixture<DeadlineModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeadlineModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeadlineModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
