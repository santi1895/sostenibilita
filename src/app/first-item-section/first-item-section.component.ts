import { Component, OnInit } from '@angular/core';
import { JsonLoaderService } from '../services/json-loader.service';

@Component({
  selector: 'app-first-item-section',
  templateUrl: './first-item-section.component.html',
  styleUrls: ['./first-item-section.component.css']
})
export class FirstItemSectionComponent implements OnInit{
   /* Dati necessari per costruire la card
   oggetto da mostrare, titolo, src dell'immagine e link per scaricare il documento */
  firstItem: any;
  title: string
  imgSrc: string
  contentUrl: string

  constructor(private jsonLoaderService: JsonLoaderService) {}

  ngOnInit(): void {
    this.jsonLoaderService.loadJsonData('files/data.json').subscribe(
      data => {
        /* Recuperiamo solo il primo elemento perchè attualmente i dati arrivano in ordine decrescente di tempo, il primo elemento è quindi il
         più recente, di conseguenza gli altri elementi verranno utilizzati e mostrati separatamente in un altro Component */
        this.firstItem = data[0];
        if (this.firstItem) {
          this.title = this.firstItem.title
          this.imgSrc = this.firstItem.imgSrc
          this.contentUrl = this.firstItem.contentUrl
        }
      },
      error => {
        console.error('Errore nel caricamento del file JSON', error);
      }
    );
  }
}
