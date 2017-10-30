import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { HistoryService } from '../services/history.service';
import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filmName: string;
  films: Array<object>;
  people: Array<object>;
  search: string;


  constructor(private router: Router, private swapi: SwapiService,
              private historyService: HistoryService) { }

  ngOnInit() {
    this.films = this.swapi.getFilms();
    if(this.films.length === 0){
      this.swapi.setFilms()
      .subscribe(films => this.films = films);
    }
    
    this.people = this.swapi.getPeople();
    if(this.people.length === 0) {
      this.swapi.setPeople()
      .subscribe(people => this.people = people);
    }

    this.pushToHistory();
  }

  private pushToHistory() {
    const path = '';
    this.historyService.checkCookie(path);
  }

  searchFilm() {

  }

  showDetails(filmId) {
    this.router.navigate(['details', filmId]);
  }


}
