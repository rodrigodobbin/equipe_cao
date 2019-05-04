import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  @ViewChild("slides") slides;

  constructor(private router: Router) {}

  tipoInter;

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

    this.tipoInter = tipoInter;

    setTimeout(() => {
      this.sucesso = true;
    }, 600);

    setTimeout(() => {
      this.router.navigate([`/idade/${this.tipoInter}`]);
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
