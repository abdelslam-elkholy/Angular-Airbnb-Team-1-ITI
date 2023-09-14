import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { HousesComponent } from './Components/houses/houses.component';
import { ReservationsComponent } from './Components/reservations/reservations.component';
import { UsersComponent } from './Components/users/users.component';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SideBarComponent, HousesComponent, ReservationsComponent, UsersComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
