import { Component } from '@angular/core';
import { Filme } from '../model/Filme';
import { FilmesService } from '../model/filmes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listFilmes: Filme[]

  constructor(private service: FilmesService) {
    this.listFilmes = service.getFilmes()

    this.service.GetTitle('Shrek')
  }

  ngOnInit(){
    this.service.GetTitle("Shrek").subscribe(res => {
      this.listFilmes = [res]
    })
  }

  getFilme(titulo: any){
    this.service.GetTitle(titulo)
  }




}
