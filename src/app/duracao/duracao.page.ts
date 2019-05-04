import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-duracao",
  templateUrl: "./duracao.page.html",
  styleUrls: ["./duracao.page.scss"]
})
export class DuracaoPage implements OnInit {
  tipoInter;
  faixaEtaria;
  acomodacao;
  escolaridade;
  pais;
  nivel;
  genero;
  gostaCrianca;
  duracao = 0;

  constructor(private actRoute: ActivatedRoute) {}

  ngOnInit() {
    this.tipoInter = this.actRoute.snapshot.params["tipoInter"];
    this.faixaEtaria = this.actRoute.snapshot.params["faixaEtaria"];
    this.acomodacao = this.actRoute.snapshot.params["acomodacao"];
    this.escolaridade = this.actRoute.snapshot.params["escolaridade"];
    this.pais = this.actRoute.snapshot.params["pais"];
    this.nivel = this.actRoute.snapshot.params["nivel"];
    this.genero = this.actRoute.snapshot.params["genero"];
    this.gostaCrianca = this.actRoute.snapshot.params["gostaCrianca"];
  }

  escolheDuracao(duracao) {
    this.duracao = duracao;
  }

  continue() {
    const obj = {
      tipoInter: this.tipoInter,
      faixaEtaria: this.faixaEtaria,
      acomodacao: [this.acomodacao],
      nivel: [this.nivel],
      escolaridade: [this.escolaridade],
      destinos: [this.pais],
      duracao: this.duracao,
      gostaCrianca: this.gostaCrianca === "T" ? true : false,
      sexo: this.genero
    };

    console.log("integração back-end", obj);
  }
}