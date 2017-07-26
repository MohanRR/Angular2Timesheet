import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: '../templates/footer.component.html',
})
export class FooterComponent implements OnInit {
  today: number = Date.now();
  constructor() { }
  ngOnInit() {

  }
}