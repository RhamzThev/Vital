import { Component, OnInit } from '@angular/core';
import FoodLog from '@declare/food-log';
import { FoodLogService } from '../../../core/services/food-log.service';
import { FoodService } from '../../../core/services/food.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Food from '@declare/food';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-food-log-details',
  standalone: true,
  imports: [NgIf, FormsModule, NgForOf, RouterLink],
  templateUrl: './food-log-details.component.html',
  styleUrl: './food-log-details.component.css'
})
export class FoodLogDetailsComponent implements OnInit {

  foods: Food[] = [];

  log: FoodLog = {
    _id: '',
    user_id: '',
    food_id: '',
    consumption_time: '',
    amount: 0
  }

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

  updatedFood: Food = {
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

  isEditing: boolean = false;

  updatedLog: FoodLog = {
    _id: '',
    user_id: '',
    food_id: '',
    consumption_time: '',
    amount: 0
  }

  constructor(private logService: FoodLogService, private foodService: FoodService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.foodService.getFoods().subscribe({
      next: (f) => this.foods = [...f]
    })

    this.activatedRoute.paramMap.subscribe({
      next: (params) => {
        const id = params.get("id")

        if (id) {
          this.logService.getLogById(id).subscribe({
            next: (l) => {
              this.log = { ...l };
              this.log.consumption_time = this.log.consumption_time.substring(0, this.log.consumption_time.length - 1);

              this.foodService.getFoods().subscribe({
                next: (f) => {
                  this.foods = [...f]
                  this.food = this.foods.find(f => f._id == l.food_id) || {
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

                }
              })

            }
          })
        }
      }
    })
  }

  getDate() {
    return new Date(this.log.consumption_time).toLocaleString();
  }

  toggleEdit() {
    this.updatedLog = { ...this.log }; // Create a copy to edit
    this.updatedFood = this.food; // Create a copy to edit

    console.log(this.updatedFood)

    this.isEditing = !this.isEditing; // Toggle edit mode
  }

  saveChanges() {
    const { _id, consumption_time, amount } = this.updatedLog;
    this.logService.updateLog(_id, this.updatedFood._id, consumption_time, amount).subscribe({
      next: () => window.location.reload()
    })
    this.isEditing = false;
  }

  cancelChanges() {
    this.isEditing = false;
  }

  deleteLog() {
    const date = new Date(this.log.consumption_time);
    if (confirm(`Are you sure you want to delete this log?\n${this.log.amount} ${this.food.units_type} of ${this.food.name} at ${date.toLocaleTimeString()} on ${date.toLocaleDateString()}`)) {
      this.logService.deleteLog(this.log._id).subscribe({
        next: () => this.router.navigate(['nutrition', 'log'])
      })
    }
  }
}
