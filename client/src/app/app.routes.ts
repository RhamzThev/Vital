import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { SignupComponent } from './features/auth/signup/signup.component';
import { PasswordComponent } from './features/auth/password/password.component';
import { isLoggedIn, isNotLoggedIn } from './core/guards/auth.guard';
import { ContentComponent } from './core/components/content/content.component';
import { MainComponent } from './core/components/main/main.component';
import { ProfileComponent } from './features/profile/profile/profile.component';

export const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'dashboard',
    //     pathMatch: 'full'
    // },
    {
        path: '', component: MainComponent, canActivate: [isLoggedIn], children: [
            { path: '', component: ContentComponent },
            { path: 'profile', component: ProfileComponent },
        ]
    },
    {
        path: 'auth', children: [
            { path: 'login', component: LoginComponent, canActivate: [isNotLoggedIn] },
            { path: 'signup', component: SignupComponent, canActivate: [isNotLoggedIn] },
            { path: 'password', component: PasswordComponent, canActivate: [isNotLoggedIn] },
        ]
    },
];
