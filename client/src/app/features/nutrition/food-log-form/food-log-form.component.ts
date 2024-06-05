import { Component, OnInit } from '@angular/core';
import FoodLog from '@declare/food-log';
import { FoodLogService } from '../../../core/services/food-log.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Food from '@declare/food';
import { FoodService } from '../../../core/services/food.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-food-log-form',
  standalone: true,
  imports: [FormsModule, NgForOf, RouterLink],
  templateUrl: './food-log-form.component.html',
  styleUrl: './food-log-form.component.css'
})
export class FoodLogFormComponent implements OnInit {

  foods: Food[] = [];

  consumption_time: string = "";

  selectedFood: Food = {
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

  amount: number = 0;

  constructor(private logService: FoodLogService, private foodService: FoodService, private router: Router) { }

  ngOnInit(): void {
    this.foodService.getFoods().subscribe({
      next: (f) => this.foods = [...f]
    })
  }

  createFood() {

    this.logService.createLog(this.selectedFood._id, this.consumption_time, this.amount).subscribe({
      next: (l) => {
        this.router.navigate(['nutrition', 'log']);
      }
    })
  }
}
