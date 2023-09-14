import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IHouse } from 'src/app/Models/IHouse';
import { HousesService } from 'src/app/Services/houses.service';

@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.css'],
})
export class AddHouseComponent implements OnInit {
  currentHouse: IHouse = {
    name: '',
    address: '',
    price: 0,
    numberOfBedrooms: 0,
    guestNumber: 0,
    images: [],
  };

  isNewHouse: boolean = true;
  successMessage: string | null = null;

  constructor(
    private housesService: HousesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const houseId = this.route.snapshot.paramMap.get('id');
    if (houseId === 'new') {
      this.isNewHouse = true;
    } else {
      this.isNewHouse = false;
      this.housesService.getHouseById(houseId!).subscribe((house) => {
        this.currentHouse = house;
      });
    }
  }

  saveHouse(): void {
    if (this.isNewHouse) {
      this.housesService.addHouse(this.currentHouse).subscribe(() => {
        this.successMessage = 'House added successfully!';
        setTimeout(() => {
          this.router.navigate(['/houses']);
        }, 1500);
      });
    } else {
      this.housesService.updateHouse(this.currentHouse).subscribe(() => {
        this.successMessage = 'Changes saved successfully!';
        setTimeout(() => {
          this.router.navigate(['/houses']);
        }, 1500);
      });
    }
  }
}
