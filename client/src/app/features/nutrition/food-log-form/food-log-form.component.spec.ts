import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodLogFormComponent } from './food-log-form.component';

describe('FoodLogFormComponent', () => {
  let component: FoodLogFormComponent;
  let fixture: ComponentFixture<FoodLogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodLogFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodLogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
