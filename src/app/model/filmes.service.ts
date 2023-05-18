import { Injectable } from '@angular/core';
import { Filme } from './Filme';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  filmes : Filme[]

  KEY = "b5a09f8c"
  API = `https://www.omdbapi.com/?apikey=${this.KEY}`;

  constructor(private http: HttpClient) { 
    this.filmes = [];
  }

  GetTitle(Title: string): Observable<Filme> {
    return this.http.get<Filme>(`${this.API}&t=${Title}`)
    
  }


  
  getFilmes(){
    console.log(this.filmes)
    return this.filmes
  }


}

