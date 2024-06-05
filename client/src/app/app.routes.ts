import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { SignupComponent } from './features/auth/signup/signup.component';
import { PasswordComponent } from './features/auth/password/password.component';
import { isLoggedIn, isNotLoggedIn } from './core/guards/auth.guard';
import { ContentComponent } from './core/components/content/content.component';
import { MainComponent } from './core/components/main/main.component';
import { ProfileComponent } from './features/profile/profile/profile.component';
import { FoodListComponent } from './features/nutrition/food-list/food-list.component';
import { FoodDetailsComponent } from './features/nutrition/food-details/food-details.component';
import { FoodFormComponent } from './features/nutrition/food-form/food-form.component';
import { NutritionComponent } from './features/nutrition/nutrition/nutrition.component';
import { FoodLogListComponent } from './features/nutrition/food-log-list/food-log-list.component';
import { FoodLogFormComponent } from './features/nutrition/food-log-form/food-log-form.component';
import { FoodLogDetailsComponent } from './features/nutrition/food-log-details/food-log-details.component';

export const routes: Routes = [
    {
        path: '', component: MainComponent, children: [
            {
                path: '', component: ContentComponent, children: [
                    // NUTRITION 
                    { path: 'nutrition', component: NutritionComponent },

                    // FOOD
                    { path: 'nutrition/food', component: FoodListComponent },
                    { path: 'nutrition/food/create', component: FoodFormComponent },
                    { path: 'nutrition/food/:id', component: FoodDetailsComponent },

                    // LOGS
                    { path: 'nutrition/log', component: FoodLogListComponent },
                    { path: 'nutrition/log/create', component: FoodLogFormComponent },
                    { path: 'nutrition/log/:id', component: FoodLogDetailsComponent }
                ]
            },
            { path: 'profile', component: ProfileComponent },
        ],
        canActivate: [isLoggedIn]
    },
    {
        path: 'auth', children: [
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignupComponent },
            { path: 'password', component: PasswordComponent },
        ],
        canActivate: [isNotLoggedIn]
    },
];
