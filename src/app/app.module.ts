import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroBackgroundComponent } from './hero-background/hero-background.component';
import { CardSectionComponent } from './card-section/card-section.component';
import { CardComponent } from './card-section/card/card.component';
import { FirstItemSectionComponent } from './first-item-section/first-item-section.component';
import { FirstItemComponent } from './first-item-section/first-item/first-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroBackgroundComponent,
    CardSectionComponent,
    CardComponent,
    FirstItemSectionComponent,
    FirstItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
