import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filmName: string;
  films ;
  people: Array<object>;


  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
    this.http.get('https://swapi.co/api/films')
    .subscribe(res => {
      if(res.status)
        this.films = res.json().results;
    });

    this.http.get('https://swapi.co/api/people')
    .subscribe(res => {
      if(res.status)
        this.people = res.json().results;
    });
  }

  searchFilm() {

  }

}
