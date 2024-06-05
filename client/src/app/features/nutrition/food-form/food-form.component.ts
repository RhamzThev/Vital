import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Food from '@declare/food';
import { FoodService } from '../../../core/services/food.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-food-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './food-form.component.html',
  styleUrl: './food-form.component.css'
})
export class FoodFormComponent {

  food: Food = {
    _id: '',
    name: '',
    units_type: 'g',
    units: 0,
    calories: 0,
    fats: 0,
    carbs: 0,
    proteins: 0,
    user_id: ''
  };

  constructor(private foodService: FoodService, private router: Router) {
  }

  createFood() {
    const { name, units_type, units, calories, fats, carbs, proteins } = this.food;
    this.foodService.createFood(name, units_type, units, calories, fats, carbs, proteins).subscribe({
      next: (f) => {
        const newFood: Food = f;
        this.router.navigate(['nutrition', 'food', newFood._id]);
      }
    })
  }

}
