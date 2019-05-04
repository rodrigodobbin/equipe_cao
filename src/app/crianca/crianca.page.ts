import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crianca',
  templateUrl: './crianca.page.html',
  styleUrls: ['./crianca.page.scss'],
})
export class CriancaPage implements OnInit {

  tipoInter;
  faixaEtaria;
  acomodacao;
  escolaridade;
  pais;
  nivel;
  genero;


  segmentChanged() {
    
  }

  continue(){

  }

  constructor() { }

  ngOnInit() {
  }

}
