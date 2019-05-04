import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProgramasService } from "../programas.service";
import { Programa } from "src/model/programa";

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

  continuarLoading = false;
  sucesso = false;

  constructor(
    private actRoute: ActivatedRoute,
    private programaService: ProgramasService,
    private router: Router
  ) {}

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
    if (this.continuarLoading) return;

    this.continuarLoading = true;

    let programa: Programa = {
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

    let variavel = [];
    variavel["Cursos de idiomas"] = "CI";
    variavel["Programa de Férias"] = "PF";
    variavel["High School"] = "HS";
    variavel["Telefone da Experimento"] = "TE";
    variavel[""] = "TE";
    variavel["Programa Universitário e Programa Profissional"] = "PUPP";
    variavel["Programa Universitário"] = "PU";
    variavel["Formação Profissional"] = "FP";
    variavel["Trabalho voluntário"] = "TV";
    variavel["Aupair"] = "AU";
    variavel["Demi pair"] = "DEMI";

    this.programaService.envia(programa).subscribe(
      programa => {
        this.sucesso = true;

        setTimeout(() => {
          this.router.navigate([
            `/resultadoprograma/${
              variavel[programa.cursoCode ? programa.cursoCode : ""]
            }`
          ]);
        }, 500);

        setTimeout(() => {
          this.sucesso = false;
          this.continuarLoading = false;
        }, 1000);
      },
      () => {
        alert("Ocorreu um erro inesperado");
        this.sucesso = false;
        this.continuarLoading = false;
      }
    );
  }
}
