import { Component, ViewChild } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { NavController } from "@ionic/angular";
import { ProgramasService } from '../programas.service';
import { Programa } from 'src/model/programa';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  @ViewChild("slides") slides;

  constructor(private router: Router, private navCtrl: NavController, private programasService: ProgramasService) {
    let programa: Programa = {
      tipoInter : 'E',
      faixaEtaria: 10,
      acomodacao: ['RE'],
      nivel: [],
      escolaridade: ['EM'],
      destinos: [],
      duracao: 4
    }
    /*
    this.programasService.envia(programa)
      .subscribe(
        (produto) => {
          console.log('sucesso!');
          console.log(produto);
        },
        () => {
          console.log('deu ruim');
        }
      ,);*/
  }

  sendObj = {};

  slideIndex = 0;
  slideOpts = {
    speed: 400
  };

  continuarLoading = false;
  sucesso = false;

  continue() {
    if (this.continuarLoading) return;

    this.continuarLoading = true;
    const tipoInter = this.slideIndex === 0 ? "E" : "TE";

    this.sendObj["tipoInter"] = tipoInter;

    setTimeout(() => {
      this.sucesso = true;
    }, 600);

    setTimeout(() => {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          sendObj: this.sendObj
        }
      };
      this.router.navigate([`/idade/${this.sendObj["tipoInter"]}`]);
      // this.navCtrl.navigateForward("/idade", navigationExtras);
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
