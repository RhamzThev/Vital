import { Component, OnInit } from '@angular/core';

import Food from '@declare/food';
import { FoodService } from '../../../core/services/food.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-food-details',
  standalone: true,
  imports: [NgIf, FormsModule, RouterLink],
  templateUrl: './food-details.component.html',
  styleUrl: './food-details.component.css'
})
export class FoodDetailsComponent implements OnInit {
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
  isEditing: boolean = false; // Flag to control edit mode
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
  }; // Copy to hold updated values

  constructor(private foodService: FoodService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (params) => {
        const id = params.get("id");

        if (id)
          this.foodService.getFoodById(id).subscribe({
            next: (f) => {
              this.food = f
            }
          })
      }
    })
  }

  toggleEdit() {
    this.isEditing = !this.isEditing; // Toggle edit mode
    this.updatedFood = { ...this.food }; // Create a copy to edit
  }

  saveChanges() {
    const { _id, name, units_type, units, calories, fats, carbs, proteins } = this.updatedFood;
    this.foodService.updateFood(_id, name, units_type, units, calories, fats, carbs, proteins).subscribe({
      next: () => window.location.reload()
    })
    this.isEditing = false;
  }

  cancelChanges() {
    this.isEditing = false;
  }

  deleteFood() {
    if (confirm(`Are you sure you want to delete ${this.food.name}?`)) {
      this.foodService.deleteFood(this.food._id).subscribe({
        next: () => this.router.navigate(['nutrition', 'food'])
      })
    }
  }
}
