import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history: Array<string>;

  constructor(private histService: HistoryService) { }

  ngOnInit() {
    this.history = this.histService.getHistory();
  }

}
