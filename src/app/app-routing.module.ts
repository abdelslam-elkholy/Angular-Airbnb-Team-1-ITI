import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousesComponent } from './Components/houses/houses.component';
import { AddHouseComponent } from './Components/add-house/add-house.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HousesComponent, title: 'Home Page' },
  { path: 'houses', component: HousesComponent, title: 'Houses Page' },
  { path: 'add-house/:id', component: AddHouseComponent, title: 'add house' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
