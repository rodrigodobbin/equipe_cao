import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-pais",
  templateUrl: "./pais.page.html",
  styleUrls: ["./pais.page.scss"]
})
export class PaisPage implements OnInit {
  @ViewChild("slides") slides;

  tipoInter;
  faixaEtaria;
  acomodacao;
  escolaridade;

  slideIndex = 0;
  slideOpts = {
    speed: 400
  };

  continuarLoading = false;
  sucesso = false;

  constructor(private router: Router, private actRoute: ActivatedRoute) {}

  ngOnInit() {
    this.tipoInter = this.actRoute.snapshot.params["tipoInter"];
    this.faixaEtaria = this.actRoute.snapshot.params["faixaEtaria"];
    this.acomodacao = this.actRoute.snapshot.params["acomodacao"];
    this.escolaridade = this.actRoute.snapshot.params["escolaridade"];

    console.log("tipoInter", this.tipoInter);
    console.log("faixaEtaria", this.faixaEtaria);
    console.log("acomodacao", this.acomodacao);
    console.log("escolaridade", this.escolaridade);
  }

  slideChanged() {
    this.slides.getActiveIndex().then(index => {
      this.slideIndex = index;
    });
  }

  continue() {
    if (this.continuarLoading) return;

    this.continuarLoading = true;
    let destinos;

    if (this.slideIndex == 0) {
      destinos = "IRL";
    } else if (this.slideIndex == 1) {
      destinos = "CAN";
    } else if (this.slideIndex == 2) {
      destinos = "AUS";
    } else if (this.slideIndex == 3) {
      destinos = "NZL";
    } else if (this.slideIndex == 4) {
      destinos = "EUA";
    } else if (this.slideIndex == 5) {
      destinos = "ZA";
    }

    setTimeout(() => {
      this.sucesso = true;
    }, 600);

    setTimeout(() => {
      this.router.navigate([
        `/nivel/${this.tipoInter}/${this.faixaEtaria}/${this.acomodacao}/${
          this.escolaridade
        }/${destinos}`
      ]);
    }, 1200);

    setTimeout(() => {
      this.sucesso = false;
      this.continuarLoading = false;
    }, 1600);
  }
}
