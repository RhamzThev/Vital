import { NgFor, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import Food from "@declare/food";
import { FoodService } from '../../../core/services/food.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [NgTemplateOutlet, NgFor, RouterLink],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css'
})
export class FoodListComponent implements OnInit {

  foods: Food[] = [];

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodService.getFoods().subscribe({
      next: (f) => this.foods = [...f]
    })
  }

  deleteFood(id: string, name: string) {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
      this.foodService.deleteFood(id).subscribe({
        next: () => window.location.reload()
      })
    }
  }

}
