import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-item',
  templateUrl: './first-item.component.html',
  styleUrls: ['./first-item.component.css']
})
export class FirstItemComponent implements OnInit{
   /* Dati necessari per costruire la card
   titolo, src dell'immagine e link per scaricare il documento */
  @Input() title: string
  @Input() imgSrc: string
  @Input() contentUrl: string

  constructor() { }

  ngOnInit(): void {
  }

}
