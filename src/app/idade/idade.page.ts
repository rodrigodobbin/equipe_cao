import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PickerController } from "@ionic/angular";
import dias from "../../assets/objects/dias.json";
import meses from "../../assets/objects/meses.json";

@Component({
  selector: "app-idade",
  templateUrl: "./idade.page.html",
  styleUrls: ["./idade.page.scss"]
})
export class IdadePage implements OnInit {
  tipoInter;

  dia;
  mes;
  ano;
  faixaEtaria;

  continuarLoading = false;
  sucesso = false;

  constructor(
    private actRoute: ActivatedRoute,
    public pickerCtrl: PickerController,
    private router: Router
  ) {}

  ngOnInit() {
    this.tipoInter = this.actRoute.snapshot.params["tipoInter"];
  }

  async escolheDia() {
    const picker = await this.pickerCtrl.create({
      buttons: [
        {
          text: "Ok",
          handler: item => {
            this.dia = item.Dia.value;
            this.calculaIdade();
          }
        },
        {
          text: "Cancelar",
          role: "cancel"
        }
      ],
      columns: [
        {
          name: "Dia",
          options: dias
        }
      ]
    });
    await picker.present();
  }

  async escolheMes() {
    const picker = await this.pickerCtrl.create({
      buttons: [
        {
          text: "Ok",
          handler: item => {
            this.mes = item.Mes.value;
            this.calculaIdade();
          }
        },
        {
          text: "Cancelar",
          role: "cancel"
        }
      ],
      columns: [
        {
          name: "Mes",
          options: meses
        }
      ]
    });
    await picker.present();
  }

  async escolheAno() {
    let anos = [];

    for (let i = 2010; i > 1970; i--) {
      const obj = {
        text: `${i}`,
        value: i
      };

      anos.push(obj);
    }

    const picker = await this.pickerCtrl.create({
      buttons: [
        {
          text: "Ok",
          handler: item => {
            this.ano = item.Ano.value;
            this.calculaIdade();
          }
        },
        {
          text: "Cancelar",
          role: "cancel"
        }
      ],
      columns: [
        {
          name: "Ano",
          options: anos
        }
      ]
    });
    await picker.present();
  }

  calculaIdade() {
    if (this.dia && this.mes && this.ano) {
      this.faixaEtaria = this.idade(this.ano, this.mes, this.dia);
    }
  }

  idade(ano_aniversario, mes_aniversario, dia_aniversario) {
    let d = new Date(),
      ano_atual = d.getFullYear(),
      mes_atual = d.getMonth() + 1,
      dia_atual = d.getDate();

    ano_aniversario = +ano_aniversario;
    mes_aniversario = +mes_aniversario;
    dia_aniversario = +dia_aniversario;

    let quantos_anos = ano_atual - ano_aniversario;

    if (
      mes_atual < mes_aniversario ||
      (mes_atual == mes_aniversario && dia_atual < dia_aniversario)
    ) {
      quantos_anos--;
    }

    return quantos_anos < 0 ? 0 : quantos_anos;
  }

  continue() {
    if (this.continuarLoading) return;

    this.continuarLoading = true;

    setTimeout(() => {
      this.sucesso = true;
    }, 600);

    setTimeout(() => {
      this.router.navigate([
        `/hospedagem/${this.tipoInter}/${this.faixaEtaria}`
      ]);
    }, 1200);

    setTimeout(() => {
      this.sucesso = false;
      this.continuarLoading = false;
    }, 1600);
  }
}
