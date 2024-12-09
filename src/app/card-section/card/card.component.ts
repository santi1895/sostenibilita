import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  /* Dati necessari per costruire la card
   titolo, src dell'immagine e link per scaricare il documento */
  @Input() title: string
  @Input() imgSrc: string
  @Input() contentUrl: string
  constructor() { }

  ngOnInit(): void {
  }

}
