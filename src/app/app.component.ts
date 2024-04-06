import { Component, OnInit } from '@angular/core';
import { PublicService } from './public.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ng-demo';

  constructor(private publicService: PublicService) {}
  ngOnInit(): void {
    this.getWeather();
  }
  getWeather() {
    const data = this.publicService.getWeather().subscribe(data => {
      console.log(data);
    })
  }
}
