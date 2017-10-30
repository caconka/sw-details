import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history: Array<string>;
  showHistory: boolean = false;

  constructor(private histService: HistoryService,
              private router: Router) { }

  ngOnInit() {
  }
  
  toggleHistory() {
    this.history = this.histService.getHistory();
    this.showHistory = !this.showHistory;
  }

  goTo(page) {
    const path = page.split('/').splice(3);
    this.router.navigate(path);
  }
}
