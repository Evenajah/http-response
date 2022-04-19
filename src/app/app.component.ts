import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('https://pokeapi.co/api/v2/pokemon/dittoss') //wrong url api
      .pipe(catchError((err: HttpErrorResponse) => of(err)))
      .subscribe(console.log);
  }
}
