import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
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
      .get('https://pokeapi.co/api/v2/pokemon/dittoss')
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return of(err);
        })
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
