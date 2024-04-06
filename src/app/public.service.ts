import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PublicService {
  apiUrl: string = 'https://localhost:44312';
  constructor(private http: HttpClient) { }
  getWeather() {
    return this.http.get(`${this.apiUrl}/WeatherForecast`);
  }
}
