import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { HistoryService } from '../services/history.service';
import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  film: object;
  showDetails: boolean = false;
  characters: Array<object> = [];
  planets: Array<object> = [];
  starships: Array<object> = [];
  vehicles: Array<object> = [];
  species: Array<object> = [];

  constructor(private historyService: HistoryService, 
              private swapi: SwapiService, 
              private http: Http,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(params => {
      this.film = this.swapi.getFilms()[params['id']-1];
      this.setTimeOut();
    });

    this.pushToHistory();
  }

  private setTimeOut() {
    setTimeout(() => {
      this.showDetails = true;
    }, 30000);
  }

  private pushToHistory() {
    const path = 'details';
    this.historyService.checkCookie(path);
  }

  private removeClass(elem) {
    elem.classList.remove('anchor');
  }

  getChars(characters, elem) {
    characters.forEach(char => {
      this.http.get(char)
      .subscribe(character => this.characters.push(character.json()));
    });
    this.removeClass(elem);   
  }
  
  getPlanets(planets, elem) {
    planets.forEach(planet => {
      this.http.get(planet)
      .subscribe(planet => this.planets.push(planet.json()));
    });
    this.removeClass(elem);   
  }

  getStarships(starships, elem) {
    starships.forEach(starship => {
      this.http.get(starship)
      .subscribe(starship => this.starships.push(starship.json()));
    });
    this.removeClass(elem);   
  }

  getVehicles(vehicles, elem) {
    vehicles.forEach(vehicle => {
      this.http.get(vehicle)
      .subscribe(vehicle => this.vehicles.push(vehicle.json()));
    });
    this.removeClass(elem);   
  }

  getSpecies(species, elem) {
    species.forEach(specie => {
      this.http.get(specie)
      .subscribe(specie => this.species.push(specie.json()));
    });
    this.removeClass(elem);   
  }

}
