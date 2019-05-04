import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProgramasService } from '../programas.service';
import { Programa } from 'src/model/programa';

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

  constructor(private actRoute: ActivatedRoute, private programaService: ProgramasService, private router: Router) {}

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
    /*
    const programa = {
      tipoInter: this.tipoInter,
      faixaEtaria: this.faixaEtaria,
      acomodacao: [this.acomodacao],
      nivel: [this.nivel],
      escolaridade: [this.escolaridade],
      destinos: [this.pais],
      duracao: this.duracao,
      gostaCrianca: this.gostaCrianca === "T" ? true : false,
      sexo: this.genero
    };*/

    let variavel = [];
    variavel['Cursos de idiomas'] = "AU";
    variavel['Programa de Férias'] = "PF";
    variavel['High School'] = "HS";
    variavel['Telefone da Experimento'] = "TE";
    variavel[''] = "TE";
    variavel['Programa Universitário e Programa Profissional'] = "PUPP";
    variavel['Programa Universitário'] = "PU";
    variavel['Formação Profissional'] = "FP";
    variavel['Trabalho voluntário'] = "TV";
    variavel['Aupair'] = "AU";
    variavel['Demi pair'] = "DEMI";


    this.programaService.envia(programa)
      .subscribe(
        (programa) => {
          console.log('sucesso!');
          console.log(programa.cursoCode);
          console.log(variavel[programa.cursoCode ? programa.cursoCode : ""]);

          setTimeout(() => {
            this.router.navigate([
              `/resultadoprograma/${variavel[programa.cursoCode ? programa.cursoCode : ""]}`
            ]);
          }, 1200);

        },
        () => {
          console.log('deu ruim');
        }
      ,);

    //console.log("integração back-end", obj);
    
  }
}
