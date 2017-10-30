import { Injectable } from '@angular/core';

const BASEURL = 'http://localhost:4200/';

@Injectable()
export class HistoryService {
  private history: Array<string> = document.cookie.split(',');

  constructor() { }

  private setCookie() {
    this.history = [BASEURL];
    document.cookie = `${BASEURL}; ${this.expires()}`;
  }

  private getCookie() {
    return document.cookie;
  }

  private expires(){
    const d = new Date();
    d.setTime(d.getTime() + (24*60*60*1000));
    return `expires= ${d.toUTCString()}`;
  }

  private addToHistory(location) {
    const pathLocation = BASEURL + location;
    this.history.push(pathLocation);
    document.cookie = `${this.history.join()}; ${this.expires()}`;    
  }

  checkCookie(location) {
    const cookie = this.getCookie();
    cookie ? this.addToHistory(location) : this.setCookie();
  }

  getHistory() {
    return this.history;
  }
}
