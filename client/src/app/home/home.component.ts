import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filmName: string;
  films: Array<object> = [];
  people: Array<object>;


  constructor(private router: Router, private http: Http,
              private historyService: HistoryService) { }

  ngOnInit() {
    this.http.get('https://swapi.co/api/films')
    .subscribe(res => {
      if(res.status)
        this.setImgFilm(res.json().results);
      
      this.films.sort(this.compare);
    });

    this.http.get('https://swapi.co/api/people')
    .subscribe(res => {
      if(res.status)
        this.people = res.json().results;
    });

    this.pushToHistory();
  }

  private compare(filmA,filmB) {
    if (filmA.episode_id < filmB.episode_id)
      return -1;
    if (filmA.episode_id > filmB.episode_id)
      return 1;
    return 0;
  }

  private pushToHistory() {
    const path = '';
    this.historyService.checkCookie(path);
  }

  private setImgFilm(films) {
    films.forEach(film => {
      switch(film.episode_id) {
        case 1: 
          film.img = 'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Phantom-Menace-I-Poster_3c1ff9eb.jpeg?region=15%2C9%2C651%2C979&width=480';
          this.films.push(film); 
          break;
        case 2:
          film.img = 'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Attack-Clones-II-Poster_53baa2e7.jpeg?region=18%2C0%2C660%2C1000&width=480';
          this.films.push(film); 
          break;
        case 3:
          film.img = 'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Revenge-Sith-III-Poster_646108ce.jpeg?region=0%2C0%2C736%2C1090&width=480';
          this.films.push(film); 
          break;
        case 4:
          film.img = 'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-New-Hope-IV-Poster_c217085b.jpeg?region=49%2C43%2C580%2C914&width=480';
          this.films.push(film); 
          break;
        case 5:
          film.img = 'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Empire-Strikes-Back-V-Poster_878f7fce.jpeg?region=25%2C22%2C612%2C953&width=480';
          this.films.push(film); 
          break;
        case 6:
          film.img = 'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Return-Jedi-VI-Poster_a10501d2.jpeg?region=12%2C9%2C618%2C982&width=480';
          this.films.push(film); 
          break;
        case 7:
          film.img = 'https://lumiere-a.akamaihd.net/v1/images/avco_payoff_1-sht_v7_lg_32e68793.jpeg?region=0%2C0%2C1620%2C2400&width=480';
          this.films.push(film); 
          break;
      }
    })
  }

  searchFilm() {

  }

  showDetails(filmId) {

  }


}
