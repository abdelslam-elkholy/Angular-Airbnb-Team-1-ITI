import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IHouse } from 'src/app/Models/IHouse';
import { HousesService } from 'src/app/Services/houses.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css'],
})
export class HousesComponent implements OnInit {
  houses: IHouse[] = [];
  constructor(private housesService: HousesService, private router: Router) {}

  ngOnInit(): void {
    this.housesService.getAllHouses().subscribe((houses) => {
      this.houses = houses;
      console.log(houses);
    });
  }

  addHouse() {
    this.router.navigate(['add-house', 'new']);
  }

  editHouse(id: string) {
    this.router.navigate(['add-house', id]);
  }

  deleteHouse(id: string) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.housesService.deleteHouse(id).subscribe((house) => {
        this.housesService.getAllHouses().subscribe((houses) => {
          this.houses = houses;
        });
      });
    }
  }
}
