import { Component, OnInit } from '@angular/core';
import FoodLog from '@declare/food-log';
import { FoodLogService } from '../../../core/services/food-log.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FoodService } from '../../../core/services/food.service';
import Food from '@declare/food';

@Component({
  selector: 'app-food-log-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './food-log-list.component.html',
  styleUrl: './food-log-list.component.css'
})
export class FoodLogListComponent implements OnInit {
  templateLogs: {
    id: string,
    consumption_time: Date,
    food: Food,
    amount: string,
  }[] = [];

  constructor(private logService: FoodLogService, private foodService: FoodService) { }

  async ngOnInit(): Promise<void> {
    this.logService.getLogsByUserId().subscribe({
      next: (logs) => {

        logs.map(log => {
          this.foodService.getFoodById(log.food_id).subscribe({
            next: (food) => {
              this.templateLogs.push({
                id: log._id,
                consumption_time: new Date(log.consumption_time),
                food: food,
                amount: `${log.amount} ${food.units_type}`,
              })
            }
          })
        })
      }
    });
  }

  sortedList() {
    return this.templateLogs.sort((a, b) => b.consumption_time.getTime() - a.consumption_time.getTime());
  }

  deleteLog(id: string, amount: string, name: string, time: Date) {
    if (confirm(`Are you sure you want to delete this log?\n${amount} of ${name} at ${time.toLocaleTimeString()} on ${time.toLocaleDateString()}`)) {
      this.logService.deleteLog(id).subscribe({
        next: () => window.location.reload()
      })
    }
  }

}
