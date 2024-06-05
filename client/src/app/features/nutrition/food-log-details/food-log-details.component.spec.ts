import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodLogDetailsComponent } from './food-log-details.component';

describe('FoodLogDetailsComponent', () => {
  let component: FoodLogDetailsComponent;
  let fixture: ComponentFixture<FoodLogDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodLogDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodLogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
