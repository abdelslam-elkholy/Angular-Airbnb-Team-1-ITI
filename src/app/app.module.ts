import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { HousesComponent } from './Components/houses/houses.component';
import { ReservationsComponent } from './Components/reservations/reservations.component';
import { UsersComponent } from './Components/users/users.component';
import { AddHouseComponent } from './Components/add-house/add-house.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HousesComponent,
    ReservationsComponent,
    UsersComponent,
    AddHouseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
