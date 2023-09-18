import { Component, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('fileInput', { static: false }) fileInput: any;
  formData: FormData = new FormData();

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

  handleFileInput(event: any): void {
    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        this.formData.append('images', files[i]);
      }
    }
  }

  saveHouse(): void {
    // Add other form fields to FormData
    this.formData.append('name', this.currentHouse.name);
    this.formData.append('address', this.currentHouse.address);
    this.formData.append('price', this.currentHouse.price.toString());
    this.formData.append(
      'numberOfBedrooms',
      this.currentHouse.numberOfBedrooms.toString()
    );
    this.formData.append(
      'guestNumber',
      this.currentHouse.guestNumber.toString()
    );
    this.formData.append('description', this.currentHouse.description!);
    this.formData.append(
      'numberOfRooms',
      this.currentHouse.numberOfRooms!.toString()
    );

    if (this.isNewHouse) {
      this.housesService.addHouse(this.formData).subscribe(() => {
        this.successMessage = 'House added successfully!';
        setTimeout(() => {
          this.router.navigate(['/houses']);
        }, 1500);
      });
    } else {
      this.housesService
        .updateHouse(this.formData, this.currentHouse._id!)
        .subscribe(() => {
          this.successMessage = 'Changes saved successfully!';
          setTimeout(() => {
            this.router.navigate(['/houses']);
          }, 1500);
        });
    }
  }
}
