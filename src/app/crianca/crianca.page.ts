import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-crianca",
  templateUrl: "./crianca.page.html",
  styleUrls: ["./crianca.page.scss"]
})
export class CriancaPage implements OnInit {
  tipoInter;
  faixaEtaria;
  acomodacao;
  escolaridade;
  pais;
  nivel;
  genero;
  gostaCrianca = "T";

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
    this.genero = this.actRoute.snapshot.params["genero"];
  }

  segmentChanged(evt) {
    evt.preventDefault();
  }

  continue() {
    if (this.continuarLoading) return;

    this.continuarLoading = true;

    setTimeout(() => {
      this.sucesso = true;
    }, 600);

    setTimeout(() => {
      this.router.navigate([
        `/duracao/${this.tipoInter}/${this.faixaEtaria}/${this.acomodacao}/${
          this.escolaridade
        }/${this.pais}/${this.nivel}/${this.genero}/${this.gostaCrianca}`
      ]);
    }, 1200);

    setTimeout(() => {
      this.sucesso = false;
      this.continuarLoading = false;
    }, 1600);
  }
}
