import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './routes';

import { FilterPipe } from './filter.pipe';

import { HistoryService } from './services/history.service';
import { SwapiService } from './services/swapi.service';

import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [
    AppComponent, DetailsComponent, HomeComponent, FilterPipe, HistoryComponent, LogoComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), FormsModule,
    HttpModule
  ],
  providers: [HistoryService, SwapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
