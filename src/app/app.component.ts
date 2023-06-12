import { Component, OnInit } from '@angular/core';
import {GeolocationService} from '@ng-web-apis/geolocation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private readonly geolocation$: GeolocationService) {}
  ngOnInit(): void {
    
    this.getPosition()
  }
  title : any = 0
  // title = navigator.geolocation.getCurrentPosition(position =>{
  //   console.log(position);
    
  // })
  getPosition() {
    this.geolocation$.subscribe(position => {
      console.log(position.coords);
      this.title = position.coords
    })
     
}

}