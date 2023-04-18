import { Component } from '@angular/core';
import { HousingLocation } from './housing-location';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';

  housingLocationList: HousingLocation[] = [{
    name: "Apartamento",
    city: "Fortaleza",
    state: "CE",
    photo: "",
    availableUnits: 4,
    wifi: true,
    laundry: true

  },{
    name: "Casa",
    city: "Fortaleza",
    state: "CE",
    photo: "",
    availableUnits: 4,
    wifi: true,
    laundry: true

  }]

  selectedLocation: HousingLocation | undefined;

  updateSelectedLocation(location: HousingLocation){
    this.selectedLocation = location;
  }
}

