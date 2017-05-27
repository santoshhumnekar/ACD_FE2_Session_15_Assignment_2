import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

export const APP_ROUTES : Routes = [

   { path: '', redirectTo:'/home', pathMatch:'full'},
   { path: 'home', component:HomeComponent },
   { path: 'first', component:FirstComponent, outlet: 'first'},
   { path: 'second', component:SecondComponent, outlet: 'second'},
   { path: 'third', component:ThirdComponent, outlet: 'third'}

]

export const routes : ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);