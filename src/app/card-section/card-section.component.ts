import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { JsonLoaderService } from '../services/json-loader.service';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.css']
})
export class CardSectionComponent implements OnInit {

  @ViewChild('searchInput') searchInputRef!: ElementRef;

  jsonData: any; // Dati ritornati dal servizio, chiamata API
  dataToView: any; // Dati che verranno mostrati
  isGridView: boolean = true; // Controlla se la vista è griglia o lista

  constructor(private jsonLoaderService: JsonLoaderService) {}

  ngOnInit(): void {
    this.jsonLoaderService.loadJsonData('files/data.json').subscribe(
      data => {
        /* Togliamo il primo elemento perchè attualmente i dati arrivano in ordine decrescente di tempo, il primo elemento è quindi il
         più recente, di conseguenza verrà utilizzato e mostrato separatamente in un altro Component */
        this.jsonData = data.slice(1);
        // Assegnamo i dati appena ricevuti per poterli mostrare
        this.dataToView = this.jsonData;
      },
      error => {
        console.error('Errore nel caricamento del file JSON', error);
      }
    );
  }

  onSearchClick(): void {
    const searchValue = this.searchInputRef.nativeElement.value.trim();
    if (searchValue) {
      this.dataToView = this.jsonData.filter((elem: any) => elem.year.includes(searchValue));
    } else {
      this.dataToView = this.jsonData;
    }
    console.log(this.dataToView);
  }

  toggleView(): void {
    this.isGridView = !this.isGridView; // Alterna la visualizzazione
  }
}
