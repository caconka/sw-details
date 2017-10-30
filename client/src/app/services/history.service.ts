import { Injectable } from '@angular/core';

const BASEURL = 'http://localhost:4200/';

@Injectable()
export class HistoryService {
  private history: Array<string> = document.cookie.split(',');

  constructor() { }

  private setCookie() {
    this.history = [BASEURL];
    document.cookie = BASEURL;
  }

  private getCookie() {
    return document.cookie;
  }

  private addToHistory(location) {
    const pathLocation = BASEURL + location;
    this.history.push(pathLocation);
    document.cookie = this.history.join();    
  }

  checkCookie(location) {
    const cookie = this.getCookie();
    cookie ? this.addToHistory(location) : this.setCookie();
  }

  getHistory() {
    console.log(this.history)
    return this.history;
  }
}
