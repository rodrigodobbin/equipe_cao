import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultadoprograma',
  templateUrl: './resultadoprograma.page.html',
  styleUrls: ['./resultadoprograma.page.scss'],
})
export class ResultadoprogramaPage implements OnInit {

  tipoPrograma;

  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit() {

    this.tipoPrograma = this.actRoute.snapshot.params["tipoPrograma"];
    console.log("abacate roxo " + this.tipoPrograma);

  }

}
