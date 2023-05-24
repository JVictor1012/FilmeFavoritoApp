import { Component } from '@angular/core';
import { Filme } from '../model/Filme';
import { FilmesService } from '../model/filmes.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  favoritos?: Filme[]

  constructor(private service : FilmesService) {}

  ngOnInit(){
    this.favoritos = this.service.getFavoritos()
  }

}
