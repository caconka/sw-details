import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../services/history.service';
import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private historyService: HistoryService, 
              private swapi: SwapiService) { }

  ngOnInit() {
    this.pushToHistory();
  }

  private pushToHistory() {
    const path = 'details';
    this.historyService.checkCookie(path);
  }

}
