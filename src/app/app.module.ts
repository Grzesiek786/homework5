import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localePL from '@angular/common/locales/pl';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HouseCardComponent } from './components/house-card/house-card.component';
import { HousesDashboardComponent } from './components/houses-dashboard/houses-dashboard.component';
import { LocaleCurrencyPipe } from './shares/locale-currency.pipe';
import { ColorsStatusDirective } from './shares/colors-status.directive';

registerLocaleData(localePL);

@NgModule({
  declarations: [AppComponent, HouseCardComponent, HousesDashboardComponent, LocaleCurrencyPipe, ColorsStatusDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pl-PL',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
