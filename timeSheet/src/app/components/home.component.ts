import { Component, OnInit } from '@angular/core';
import {Image} from '../interface/image.interface';

@Component({
   // moduleId: module.id,
   templateUrl: '../templates/home.component.html'
})

export class HomeComponent {
    public images = IMAGES;
}
var IMAGES: Image[] = [
  { "title": "We are covered", "url": "http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg" },
  { "title": "Generation Gap", "url": "http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg" },
  { "title": "Potter Me", "url": "http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg" },
  { "title": "Pre-School Kids", "url": "http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg" },
  { "title": "Young Peter Cech", "url": "http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg" } 
];