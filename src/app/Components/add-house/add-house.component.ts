import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/Models/ICategory';
import { IHouse } from 'src/app/Models/IHouse';
import { CategoriesService } from 'src/app/Services/categories.service';
import { HousesService } from 'src/app/Services/houses.service';
import * as Leaflet from 'leaflet';

Leaflet.Icon.Default.imagePath = 'assets/';

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
    numberOfRooms: 0,
    numberOfBedrooms: 0,
    guestNumber: 0,
    images: [],
    description: '',
    category: '',
    lng: 0,
    lat: 0,
    region: 'Africa',
  };

  categories: ICategory[] = [];
  isNewHouse: boolean = true;
  successMessage: string | null = null;

  @ViewChild('fileInput', { static: false }) fileInput: any;
  formData: FormData = new FormData();

  constructor(
    private housesService: HousesService,
    private categoryService: CategoriesService,
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

    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
    // this.getLocation();
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
    this.formData.append('lat', this.currentHouse.lat.toString());
    this.formData.append('lng', this.currentHouse.lng.toString());
    this.formData.append('region', this.currentHouse.region);
    this.formData.append('category', this.currentHouse.category!);

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
  manageCategories(): void {
    this.router.navigate(['/categories']);
  }

  map!: Leaflet.Map;
  markers: Leaflet.Marker[] = [];
  options = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }),
    ],
    zoom: 1,
    center: { lat: 0, lng: 0 },
  };

  showPosition(position: GeolocationPosition) {
    this.currentHouse.lat = position.coords.latitude;
    this.currentHouse.lng = position.coords.longitude;

    console.log(position.coords.latitude, position.coords.longitude);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }

  // initMarkers() {
  //   const initialMarkers = [
  //     {
  //       position: { lat: 30.0515328, lng: 31.2541184  },
  //       draggable: true
  //     }
  //   ];

  //   for (let index = 0; index < initialMarkers.length; index++) {
  //     const data = initialMarkers[index];
  //     const marker = this.generateMarker(data, index);
  //     marker.addTo(this.map).bindPopup(`<b>${data.position.lat},  ${data.position.lng}</b>`);
  //     this.map.panTo(data.position);
  //     this.markers.push(marker)
  //   }
  // }

  generateMarker(data: any, index: number) {
    return Leaflet.marker(data.position, { draggable: data.draggable })
      .on('click', (event) => this.markerClicked(event, index))
      .on('dragend', (event) => this.markerDragEnd(event, index));
  }

  onMapReady($event: Leaflet.Map) {
    this.map = $event;
    // this.initMarkers();
  }

  mapClicked($event: any) {
    console.log($event.latlng.lat, $event.latlng.lng);
    const data = {
      position: { lat: $event.latlng.lat, lng: $event.latlng.lng },
      draggable: true,
    };

    const marker = this.generateMarker(data, this.markers.length - 1);
    if (this.markers.length - 1 == 0) {
      this.map!.removeLayer(this.markers[this.markers.length - 1]);
      this.markers!.splice(this.markers.length - 1, 1);
      marker
        .addTo(this.map)
        .bindPopup(`<b>${data.position.lat},  ${data.position.lng}</b>`);
      this.markers.push(marker);
      this.currentHouse.lat = $event.latlng.lat;
      this.currentHouse.lng = $event.latlng.lng;
      console.log('From Map ' + this.currentHouse.lat, this.currentHouse.lng);
    } else {
      marker
        .addTo(this.map)
        .bindPopup(`<b>${data.position.lat},  ${data.position.lng}</b>`);
      this.markers.push(marker);
      this.currentHouse.lat = $event.latlng.lat;
      this.currentHouse.lng = $event.latlng.lng;
      console.log('From Map ' + this.currentHouse.lat, this.currentHouse.lng);
    }
  }

  markerClicked($event: any, index: number) {
    console.log($event.latlng.lat, $event.latlng.lng, index);
  }

  markerDragEnd($event: any, index: number) {
    console.log($event.target.getLatLng());
    this.currentHouse.lat = $event.target.getLatLng().lat;
    this.currentHouse.lng = $event.target.getLatLng().lng;
  }
}
