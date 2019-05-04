import { Component, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-formacao",
  templateUrl: "./formacao.page.html",
  styleUrls: ["./formacao.page.scss"]
})
export class FormacaoPage {
  @ViewChild("slides") slides;

  slideIndex = 0;
  slideOpts = {
    speed: 400
  };

  tipoInter;
  faixaEtaria;
  acomodacao;

  continuarLoading = false;
  sucesso = false;

  constructor(private router: Router, private actRoute: ActivatedRoute) {}

  ngOnInit() {
    this.tipoInter = this.actRoute.snapshot.params["tipoInter"];
    this.faixaEtaria = this.actRoute.snapshot.params["faixaEtaria"];
    this.acomodacao = this.actRoute.snapshot.params["acomodacao"];
  }

  continue() {
    if (this.continuarLoading) return;

    this.continuarLoading = true;
    let escolaridade;

    if (this.slideIndex == 0) {
      escolaridade = "EF";
    } else if (this.slideIndex == 1) {
      escolaridade = "EM";
    } else if (this.slideIndex == 2) {
      escolaridade = "GC";
    }

    setTimeout(() => {
      this.sucesso = true;
    }, 600);

    setTimeout(() => {
      this.router.navigate([
        `/pais/${this.tipoInter}/${this.faixaEtaria}/${
          this.acomodacao
        }/${escolaridade}`
      ]);
    }, 1200);

    setTimeout(() => {
      this.sucesso = false;
      this.continuarLoading = false;
    }, 1600);
  }

  slideChanged() {
    this.slides.getActiveIndex().then(index => {
      this.slideIndex = index;
    });
  }
}
