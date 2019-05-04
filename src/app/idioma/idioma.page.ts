import { Component, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-idioma",
  templateUrl: "./idioma.page.html",
  styleUrls: ["./idioma.page.scss"]
})
export class IdiomaPage {
  @ViewChild("slides") slides;

  tipoInter;
  faixaEtaria;
  acomodacao;
  escolaridade;
  pais;

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
    this.pais = this.actRoute.snapshot.params["pais"];
  }

  continue() {
    if (this.continuarLoading) return;

    this.continuarLoading = true;
    let nivel;

    if (this.slideIndex === 0) {
      nivel = "B";
    } else if (this.slideIndex === 1) {
      nivel = "I";
    } else if (this.slideIndex === 2) {
      nivel = "A";
    }

    setTimeout(() => {
      this.sucesso = true;
    }, 600);

    setTimeout(() => {
      this.router.navigate([
        `/genero/${this.tipoInter}/${this.faixaEtaria}/${this.acomodacao}/${
          this.escolaridade
        }/${this.pais}/${nivel}`
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
