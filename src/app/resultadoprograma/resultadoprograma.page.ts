import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-resultadoprograma",
  templateUrl: "./resultadoprograma.page.html",
  styleUrls: ["./resultadoprograma.page.scss"]
})
export class ResultadoprogramaPage implements OnInit {
  tema;
  cardImg;
  textoHeader;
  containerText;
  tipoPrograma;

  constructor(private actRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.tipoPrograma = this.actRoute.snapshot.params["tipoPrograma"];
    console.log("abacate roxo " + this.tipoPrograma);

    this.montaConteudo(this.tipoPrograma);
  }

  montaConteudo(tipo) {
    switch (tipo) {
      case "DEMI":
        // Demi pair
        this.tema = "rosa";
        this.cardImg = "demi.jpeg";
        this.textoHeader = "Demi pair";
        this.containerText = "Estude, trabalhe e curta a austrália!";
        break;
      case "AU":
        // Aupair
        this.tema = "verde";
        this.cardImg = "au.jpeg";
        this.textoHeader = "Aupair";
        this.containerText = "Estude, trabalhe e curta os Estados Unidos!";
        break;
      case "TV":
        // Trabalho voluntário
        this.tema = "roxo";
        this.cardImg = "tv.jpeg";
        this.textoHeader = "VOLUNTÁRIO";
        this.containerText = "ESTUDE, TRABALHE E AJUDE OS OUTROS!";
        break;
      case "FP":
        // Formação Profissional
        this.tema = "laranja";
        this.cardImg = "fp.jpeg";
        this.textoHeader = "FORMAÇÃO PROFISSIONAL";
        this.containerText = "ESTUDE E APRIMORE SEUS CONHECIMENTOS!";
        break;
      case "PU":
        // Programa Universitário
        this.tema = "azulClaro";
        this.cardImg = "pu.jpeg";
        this.textoHeader = "PROGRAMA UNIVERSITÁRIO";
        this.containerText =
          " ENCONTRE A OPORTUNIDADE QUE VOCÊ TANTO SONHOU DE ESTUDAR NO EXTERIOR!";
        break;
      case "PUPP":
        // Programa Universitário e Programa Profissional
        this.tema = "azul";
        this.cardImg = "pupp.jpeg";
        this.textoHeader = "TRABALHO + ESTUDO ";
        this.containerText = "ESTUDE E TRABALHE NO INTERCÂMBIO";
        break;
      case "TE":
        // Telefone da Experimento
        this.tema = "verde";
        this.cardImg = "tv.jpeg";
        this.textoHeader = "Telefone para nós";
        this.containerText = "Você é único";
        break;
      case "HS":
        // High School
        this.tema = "azulClaro";
        this.cardImg = "hs.jpeg";
        this.textoHeader = "High School";
        this.containerText = "faça";
        break;
      case "CI":
        // Cursos de idiomas
        this.tema = "rosa";
        this.cardImg = "ci.jpeg";
        this.textoHeader = "CURSO DE IDIOMA";
        this.containerText = " GANHE FLUÊNCIA EM OUTRO IDIOMA.";
        break;
      case "PF":
        // Programa de Férias
        this.tema = "laranja";
        this.cardImg = "pf.jpeg";
        this.textoHeader = "PROGRAMA DE FÉRIAS";
        this.containerText = "A MANEIRA MAIS DIVERTIDA DE CURTIR AS FÉRIAS!";
        break;
      default:
        // Telefone da Experimento
        this.tipoPrograma = "TE";
        this.tema = "verde";
        this.cardImg = "tv.jpeg";
        this.textoHeader = "Telefone para nós";
        this.containerText = "Você é único";
        break;
    }
  }

  saibaMais() {
    this.router.navigate(["/obrigado"]);
  }
}
