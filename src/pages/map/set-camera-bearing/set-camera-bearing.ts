import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent } from '@ionic-native/google-maps';


@IonicPage()
@Component({
  selector: 'page-set-camera-bearing',
  templateUrl: 'set-camera-bearing.html',
})
export class SetCameraBearingPage {
  map: GoogleMap;
  bearing: number;

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.bearing = 0;

    this.map = GoogleMaps.create("map_canvas", {
      camera: {
        target: {
          lat: 37.422858,
          lng: -122.085065
        },
        zoom: 15
      }
    });
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log("map is ready");
    });
  }

  onButton_click() {
    this.bearing += 15;
    this.map.setCameraBearing(this.bearing);
  }
}
