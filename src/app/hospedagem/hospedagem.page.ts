import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-hospedagem",
  templateUrl: "./hospedagem.page.html",
  styleUrls: ["./hospedagem.page.scss"]
})
export class HospedagemPage implements OnInit {
  tipoInter;
  faixaEtaria;

  acomodacao = "CF";
  acomodacaoTexto = "Casa de família";

  continuarLoading = false;
  sucesso = false;

  constructor(private actRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.tipoInter = this.actRoute.snapshot.params["tipoInter"];
    this.faixaEtaria = this.actRoute.snapshot.params["faixaEtaria"];
  }

  escolheAcomodacao(tipo) {
    switch (tipo) {
      case "casa":
        this.acomodacao = "CF";
        this.acomodacaoTexto = "Casa de família";
        break;
      case "estudantil":
        this.acomodacao = "RE";
        this.acomodacaoTexto = "Residência Estudantil";
        break;
      case "ap":
        this.acomodacao = "A";
        this.acomodacaoTexto = "Apartamento";
        break;
      case "hotel":
        this.acomodacao = "H";
        this.acomodacaoTexto = "Hotel";
        break;
      case "campus":
        this.acomodacao = "CU";
        this.acomodacaoTexto = "Campus universitário";
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
      this.router.navigate([
        `/formacao/${this.tipoInter}/${this.faixaEtaria}/${this.acomodacao}`
      ]);
    }, 1200);

    setTimeout(() => {
      this.sucesso = false;
      this.continuarLoading = false;
    }, 1600);
  }
}
