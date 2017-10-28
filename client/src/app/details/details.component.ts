import { Component, OnInit } from '@angular/core';

import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    this.pushToHistory();
  }

  private pushToHistory() {
    const path = 'details';
    this.historyService.checkCookie(path);
  }

}
