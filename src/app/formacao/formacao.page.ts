import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-formacao',
  templateUrl: './formacao.page.html',
  styleUrls: ['./formacao.page.scss'],
})
export class FormacaoPage {
  @ViewChild("slides") slides;
  
  constructor(private router: Router, private navCtrl: NavController) {}

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
    let escolaridade;

    if (this.slideIndex == 0) {
      escolaridade = "EF";
    } else if (this.slideIndex == 1) {
      escolaridade = "EM";
    } else if (this.slideIndex == 2) {
      escolaridade = "GC";
    }

    this.sendObj["escolaridade"] = escolaridade;

    setTimeout(() => {
      this.sucesso = true;
    }, 600);

    setTimeout(() => {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          sendObj: this.sendObj
        }
      };
      this.router.navigate([`/idade/${this.sendObj["escolaridade"]}`]);
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
