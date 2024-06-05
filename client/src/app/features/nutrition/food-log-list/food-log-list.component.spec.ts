import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodLogListComponent } from './food-log-list.component';

describe('FoodLogListComponent', () => {
  let component: FoodLogListComponent;
  let fixture: ComponentFixture<FoodLogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodLogListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodLogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
