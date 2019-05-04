import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.page.html',
  styleUrls: ['./idioma.page.scss'],
})
export class IdiomaPage {
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
    let nivel;

    if (this.slideIndex === 0) {
      nivel = "B";
    } else if (this.slideIndex === 1) {
      nivel = "I";
    } else if (this.slideIndex === 2) {
      nivel = "A";
    }

    this.sendObj["nivel"] = nivel;

    setTimeout(() => {
      this.sucesso = true;
    }, 600);

    setTimeout(() => {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          sendObj: this.sendObj
        }
      };
      this.router.navigate([`/idade/${this.sendObj["nivel"]}`]);
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
