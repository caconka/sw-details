import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private historyService: HistoryService, 
              private swapi: SwapiService, 
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

}
