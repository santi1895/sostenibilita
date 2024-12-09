import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonLoaderService {

  constructor(private http: HttpClient) {}

  // Metodo per caricare un file JSON
  loadJsonData(fileName: string): Observable<any> {
    const filePath = `assets/${fileName}`;
    return this.http.get<any>(filePath);
  }
}