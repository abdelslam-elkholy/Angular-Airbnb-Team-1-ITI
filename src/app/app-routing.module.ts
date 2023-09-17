import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousesComponent } from './Components/houses/houses.component';
import { AddHouseComponent } from './Components/add-house/add-house.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { AddCategoryComponent } from './Components/add-category/add-category.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HousesComponent, title: 'Home Page' },
  { path: 'houses', component: HousesComponent, title: 'Houses Page' },
  { path: 'add-house/:id', component: AddHouseComponent, title: 'add house' },

  {
    path: 'categories',
    component: CategoriesComponent,
    title: 'Categories Page',
  },
  {
    path: 'add-category/:id',
    component: AddCategoryComponent,
    title: 'add category',
  },
  {
    path: 'users',
    component: UsersComponent,
    title: 'Users Page',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
