import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-idade",
  templateUrl: "./idade.page.html",
  styleUrls: ["./idade.page.scss"]
})
export class IdadePage implements OnInit {
  tipoInter;

  constructor(private actRoute: ActivatedRoute) {}

  ngOnInit() {
    this.tipoInter = this.actRoute.snapshot.params["tipoInter"];
    console.log(this.tipoInter);
  }
}
