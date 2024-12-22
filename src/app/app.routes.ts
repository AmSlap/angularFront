import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {
        path:'homepage',
        component:HomePageComponent,
        title:'Home Page'
    },
    {
        path:'',
        component:LoginComponent,
        title:'Login Page'
    },
    {
        path : 'details/:id',
        component : DetailsComponent,
        title: 'Details Page'
    }
];
