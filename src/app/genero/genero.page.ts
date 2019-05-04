import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-genero",
  templateUrl: "./genero.page.html",
  styleUrls: ["./genero.page.scss"]
})
export class GeneroPage implements OnInit {
  tipoInter;
  faixaEtaria;
  acomodacao;
  escolaridade;
  pais;
  nivel;

  genero = "M";
  generoTexto = "Masculino";

  continuarLoading = false;
  sucesso = false;

  constructor(private actRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.tipoInter = this.actRoute.snapshot.params["tipoInter"];
    this.faixaEtaria = this.actRoute.snapshot.params["faixaEtaria"];
    this.acomodacao = this.actRoute.snapshot.params["acomodacao"];
    this.escolaridade = this.actRoute.snapshot.params["escolaridade"];
    this.pais = this.actRoute.snapshot.params["pais"];
    this.nivel = this.actRoute.snapshot.params["nivel"];
  }

  escolheGenero(tipo) {
    switch (tipo) {
      case "M":
        this.genero = "M";
        this.generoTexto = "Masculino";
        break;
      case "F":
        this.genero = "F";
        this.generoTexto = "Feminino";
        break;
    }
  }

  continue() {
    if (this.continuarLoading) return;

    this.continuarLoading = true;

    setTimeout(() => {
      this.sucesso = true;
    }, 600);

    setTimeout(() => {
      console.log("vamos para crianca");
    }, 1200);

    setTimeout(() => {
      this.sucesso = false;
      this.continuarLoading = false;
    }, 1600);
  }
}
