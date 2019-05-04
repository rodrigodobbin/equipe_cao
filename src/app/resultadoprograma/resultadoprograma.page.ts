import { Component, OnInit } from "@angular/core";

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

  constructor() {}

  ngOnInit() {
    this.tema = "rosa";
    this.cardImg = "programa-universitario.jpeg";
    this.textoHeader = "Demi pair";
    this.containerText =
      "Encontre a oportunidade que você tanto sonhou de estudar no exterior!";
  }

  saibaMais() {
    console.log("MAIS");
  }
}
