(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resultadoprograma-resultadoprograma-module"],{

/***/ "./src/app/resultadoprograma/resultadoprograma.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/resultadoprograma/resultadoprograma.module.ts ***!
  \***************************************************************/
/*! exports provided: ResultadoprogramaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultadoprogramaPageModule", function() { return ResultadoprogramaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _resultadoprograma_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resultadoprograma.page */ "./src/app/resultadoprograma/resultadoprograma.page.ts");







var routes = [
    {
        path: '',
        component: _resultadoprograma_page__WEBPACK_IMPORTED_MODULE_6__["ResultadoprogramaPage"]
    }
];
var ResultadoprogramaPageModule = /** @class */ (function () {
    function ResultadoprogramaPageModule() {
    }
    ResultadoprogramaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_resultadoprograma_page__WEBPACK_IMPORTED_MODULE_6__["ResultadoprogramaPage"]]
        })
    ], ResultadoprogramaPageModule);
    return ResultadoprogramaPageModule;
}());



/***/ }),

/***/ "./src/app/resultadoprograma/resultadoprograma.page.html":
/*!***************************************************************!*\
  !*** ./src/app/resultadoprograma/resultadoprograma.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <img src=\"../../assets/img/experimento.png\" alt=\"Experimento\" class=\"logo\" />\n  <div class=\"argola\" [ngClass]=\"tema\"></div>\n\n  <ion-card>\n    <ion-card-header>\n      <img [src]=\"'../../assets/img/' + cardImg\" />\n\n      <div [ngClass]=\"tema\">\n        <h1>{{ textoHeader }}</h1>\n      </div>\n    </ion-card-header>\n\n    <ion-card-content>\n      <div class=\"container\" [ngClass]=\"tema\">\n        <p>\n          Obrigado por utilizar o nosso aplicativo, ficamos felizes em ajudá-lo!\n        </p>\n        <h3>\n          {{ containerText }}\n        </h3>\n      </div>\n\n      <!-- Demi Pair -->\n      <div class=\"text\" *ngIf=\"tipoPrograma === 'DEMI'\">\n        <p>\n          Já pensou em em estudar e trabalhar na Austrália?\n        </p>\n        <p>\n          O programa Demi Pair é recomendado para aqueles que desejam aprimorar\n          o inglês com a vantagem de não pagar por 12 semanas de acomodação e\n          refeições.\n        </p>\n        <p>\n          O Demi Pair vai ajudar a família hospedeira nas tarefas do lar e no\n          cuidado de crianças durante 4 horas por dia, no máximo. Vale reforçar\n          que a prioridade nesse programa é o curso de idiomas.\n        </p>\n      </div>\n      <!-- Demi Pair -->\n\n      <!-- AuPair -->\n      <div class=\"text\" *ngIf=\"tipoPrograma === 'AU'\">\n        <p>\n          Se você adora crianças e tem o sonho de morar fora do país, o programa\n          Au Pair é perfeito para você! Imagine participar de um programa de\n          intercâmbio cultural, passar um ano nos Estados Unidos, morando\n          legalmente com uma família norte-americana e ganhando salário em\n          dólares para cuidar de crianças?\n        </p>\n        <p>\n          Uma imersão cultural completa, você será recebida como um membro da\n          família e terá a oportunidade de fazer um curso a sua escolha,\n          enquanto cuida das crianças, vivendo uma nova cultura e praticando o\n          inglês todos os dias!\n        </p>\n      </div>\n      <!-- AuPair -->\n\n      <!-- High School -->\n      <div class=\"text\" *ngIf=\"tipoPrograma === 'HS'\">\n        <p>\n          Se você é estudante do ensino médio e quer ter uma experiência\n          incrível no exterior, cursar um ano de High School fora do Brasil será\n          uma oportunidade única na sua vida. Além de todo aprendizado que terá,\n          você não perde o ano e ainda ganha um currículo brilhante!\n        </p>\n        <p>\n          EXPERIMENTE VIVER EM OUTRA LÍNGUA!\n        </p>\n        <p>\n          Onde você gostaria de viver por um ano e ainda por cima aprender outro\n          idioma? Já pensou em fazer um programa High School no Estados Unidos,\n          ou quem sabe na Alemanha? É isso o que o programa de High School da\n          Experimento oferece para você: a oportunidade de tornar você um\n          cidadão do mundo! Conquiste muitos amigos estrangeiros e tenha a\n          oportunidade de viver com uma família fora do Brasil. No seu\n          intercâmbio no exterior, você decide como vai aproveitar seu tempo.\n          LONGE, MAS PERTO: CONTE COM SUPORTE O TEMPO INTEIRO\n        </p>\n        <p>\n          Você pode passar um ano do outro lado do mundo, mas sempre terá alguém\n          conhecido por perto. Seus amigos daqui não vão parar de pedir para\n          você compartilhar fotos, seus amigos de lá vão querer saber como é o\n          Brasil. A Experimento também vai ser sua companhia nesta viagem: há\n          mais de 50 anos no mercado, sabemos tudo o que pode acontecer com um\n          Experimenter (como chamamos nossos intercambistas) e estamos\n          preparados para dar a você todo o suporte necessário. Você será\n          orientado antes, durante e depois do intercâmbio no exterior.\n        </p>\n        <p>\n          Já está se imaginando fazendo posts e dando check-in nos lugares mais\n          lindos do mundo? Então, confira nossos destinos e prepare a mala!\n        </p>\n      </div>\n      <!-- High School -->\n\n      <!-- Trabalho e Estudo -->\n      <div class=\"text\" *ngIf=\"tipoPrograma === 'PUPP'\">\n        <p>\n          Que tal aprimorar o idioma com uma experiência de estudo e trabalho no\n          exterior? Já pensou em receber um salário em dólar ou euro e de quebra\n          custear uma parte das despesas durante o seu intercâmbio no exterior?\n        </p>\n        <p>\n          Esse é o momento ideal!\n        </p>\n        <p>\n          Trabalho remunerado no exterior é uma ótima experiência para\n          aperfeiçoar a língua estrangeira, pois além do aprendizado em sala de\n          aula é possível vivenciar situações reais do dia a dia e uma total\n          imersão na cultura do país escolhido. Tudo isso torna a vivência em\n          outro país única e valiosa.\n        </p>\n        <p>\n          Conheça os países onde estão disponíveis essas oportunidades\n          imperdíveis e aproveite para conhecer o novo programa da Experimento,\n          o Demi Pair, um programa de estudo com trabalho na Austrália!\n        </p>\n      </div>\n      <!-- Trabalho e Estudo -->\n\n      <!-- Formação profissional -->\n      <div class=\"text\" *ngIf=\"tipoPrograma === 'FP'\">\n        <p>\n          Estudar no exterior vai muito além de fazer cursos de idiomas. Não\n          importa se você está iniciando sua vida profissional, pretende fazer\n          uma mudança de rumos ou ambiciona alavancar sua carreira, em qualquer\n          uma dessas condições, os Programas de Extensão Universitária e os\n          Programas Profissionalizantes são recomendados e farão a diferença no\n          seu futuro.\n        </p>\n        <p>\n          Os cursos, com duração de uma semana a dois anos, propõem aprendizagem\n          prática e o aprofundamento em inúmeras áreas de atuação e de estudos\n          de seu interesse, além do desenvolvimento de competências essenciais\n          visando à sua inserção no mercado de trabalho e vantagem competitiva\n          na carreira.\n        </p>\n      </div>\n      <!-- Formação profissional -->\n\n      <!-- Programa Universitário -->\n      <div class=\"text\" *ngIf=\"tipoPrograma === 'PU'\">\n        <p>Seu primeiro ano de graduação começa aqui.</p>\n\n        <p>\n          Os Programas Universitários são a melhor alternativa para jovens e\n          adultos que desejam viver uma experiência em outro país para\n          desenvolver uma carreira sólidas e prospera.\n        </p>\n\n        <p>\n          Conte com a orientação de nossos especialistas para fazer um\n          planejamento claro e com investimento compatível para garantir sua\n          vaga em um de nossos programas:\n        </p>\n\n        <p>- Study Abroad - Intercâmbio e graduação</p>\n        <p>- Graduação no exterior</p>\n      </div>\n      <!-- Programa Universitário -->\n\n      <!-- Curso de Idiomas -->\n      <div class=\"text\" *ngIf=\"tipoPrograma === 'CI'\">\n        <p>\n          Se você deseja adquirir fluência em outro idioma, estudar no exterior\n          e fazer curso de idiomas é uma ótima forma de ficar mais próximo da\n          língua que você quer aprender. É comprovado que esta é uma das\n          melhores formas de aprendizado. As situações cotidianas, com o povo\n          local, estimulam o raciocínio na nova língua e enriquecem, também, o\n          entendimento de novos vocábulos, o que garante a combinação perfeita\n          para um aprendizado rápido e duradouro.\n        </p>\n        <p>\n          Para que a sua experiência seja completa é fundamental você contar, no\n          Brasil, com a assessoria de uma agência de intercâmbio que te\n          orientará quanto à escolha da opção de curso de idioma no exterior que\n          melhor atenda às suas expectativas.\n        </p>\n      </div>\n      <!-- Curso de Idiomas -->\n\n      <!-- Programa de férias -->\n      <div class=\"text\" *ngIf=\"tipoPrograma === 'PF'\">\n        <p>\n          A modalidade Programa de Férias da Experimento foi desenvolvida para\n          jovens de até 18 anos que querem viajar para o exterior, aperfeiçoar\n          um idioma, desenvolver habilidades ou praticar esportes, se divertindo\n          e aprendendo num ambiente internacional.\n        </p>\n        <p>\n          Nossos roteiros incluem além do curso, passeios e inúmeras atividades,\n          apoio e supervisão de líderes Experimento ou monitores locais. É só\n          você dar uma olhada abaixo nos tipos de programa e opções de destinos!\n        </p>\n      </div>\n      <!-- Programa de férias -->\n\n      <!-- Voluntário -->\n      <div class=\"text\" *ngIf=\"tipoPrograma === 'TV'\">\n        <p>\n          Você deseja ter uma experiência única e que fará diferença na vida de\n          quem realmente precisa? Tem vontade de viajar, ajudar pessoas e ainda\n          aprimorar o idioma no exterior?\n        </p>\n        <p>\n          Se a resposta for positiva, nós temos o programa certo para você!\n        </p>\n        <p>\n          No Trabalho Voluntário no Exterior, além de conhecer um novo país e um\n          novo idioma, você trabalha em benefício de uma causa. O programa de\n          Intercâmbio Voluntário vai além da doação de tempo e dinheiro, busca\n          fazer com que o voluntariado receba muito mais do que ele irá doar\n          durante essa experiência, como novos amigos, conhecimento sobre\n          assuntos críticos que o mundo ainda enfrenta nos dias de hoje,\n          conhecimento e entendimento da cultura local e a possibilidade de\n          fazer a diferença na vida de outra pessoa.\n        </p>\n        <p>\n          Além disso, essa bagagem cultural é cada vez mais valorizada pelas\n          empresas que buscam profissionais com formação mais abrangente.\n        </p>\n      </div>\n      <!-- Voluntário -->\n\n      <!-- Telefone Experimento -->\n      <div class=\"text\" *ngIf=\"tipoPrograma === 'TE'\">\n        <p>\n          Entre em contato conosco através do número (11) 9876-0986, pois você\n          tem um perfil único e temos certeza que podemos fazer um intercâmbio\n          especial para você.\n        </p>\n      </div>\n      <!-- Telefone Experimento -->\n\n      <ion-button\n        size=\"large\"\n        expand=\"full\"\n        fill=\"outline\"\n        shape=\"round\"\n        color=\"success\"\n        class=\"animated fadeIn\"\n        (click)=\"saibaMais()\"\n      >\n        <span *ngIf=\"!continuarLoading && !sucesso\"\n          >Receber mais informações</span\n        >\n        <ion-spinner\n          name=\"crescent\"\n          *ngIf=\"continuarLoading && !sucesso\"\n        ></ion-spinner>\n        <ion-icon\n          name=\"thumbs-up\"\n          *ngIf=\"sucesso\"\n          class=\"animated slideInUp\"\n        ></ion-icon>\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/resultadoprograma/resultadoprograma.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/resultadoprograma/resultadoprograma.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  width: 50%;\n  display: block;\n  margin: 0 auto; }\n\n.argola {\n  position: fixed;\n  top: -34%;\n  left: -5%;\n  width: 110%;\n  height: 64%;\n  border-radius: 50%;\n  opacity: 0.6;\n  border: 55px solid; }\n\n.argola.rosa {\n    border-color: var(--ion-color-rosatop); }\n\n.argola.verde {\n    border-color: var(--ion-color-verdetop); }\n\n.argola.azul {\n    border-color: var(--ion-color-azultop); }\n\n.argola.roxo {\n    border-color: var(--ion-color-roxotop); }\n\n.argola.laranja {\n    border-color: var(--ion-color-laranjatop); }\n\n.argola.azulClaro {\n    border-color: var(--ion-color-azulclarotop); }\n\nion-card {\n  --background: #fff; }\n\nion-card .container {\n    margin-bottom: 1rem;\n    text-align: center;\n    padding: 1.5rem 0.5rem 0.5rem 0.5rem; }\n\nion-card .container.rosa {\n      background: var(--ion-color-rosatop); }\n\nion-card .container.verde {\n      background: var(--ion-color-verdetop); }\n\nion-card .container.azul {\n      background: var(--ion-color-azultop); }\n\nion-card .container.roxo {\n      background: var(--ion-color-roxotop); }\n\nion-card .container.laranja {\n      background: var(--ion-color-laranjatop); }\n\nion-card .container.azulClaro {\n      background: var(--ion-color-azulclarotop); }\n\nion-card .container p {\n      margin: 0;\n      margin-bottom: 10px;\n      color: #fff;\n      font-size: 0.7rem; }\n\nion-card .container h3 {\n      margin: 0;\n      color: #fff;\n      font-size: 0.9rem;\n      font-weight: bold;\n      text-transform: uppercase; }\n\nion-card .text p {\n    margin-bottom: 1rem; }\n\nion-card-header {\n  position: relative; }\n\nion-card-header div {\n    position: absolute;\n    left: 21px;\n    bottom: 21px; }\n\nion-card-header div.rosa {\n      background: var(--ion-color-rosatop); }\n\nion-card-header div.verde {\n      background: var(--ion-color-verdetop); }\n\nion-card-header div.azul {\n      background: var(--ion-color-azultop); }\n\nion-card-header div.roxo {\n      background: var(--ion-color-roxotop); }\n\nion-card-header div.laranja {\n      background: var(--ion-color-laranjatop); }\n\nion-card-header div.azulClaro {\n      background: var(--ion-color-azulclarotop); }\n\nion-card-header div h1 {\n      margin: 0;\n      color: #fff;\n      font-size: 1.2rem;\n      font-weight: bold;\n      text-transform: uppercase; }\n\nion-card-header ion-button {\n    text-transform: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RvYmJpbi9wcm9qZXRvcy9lcXVpcGVfY2FvL3NyYy9hcHAvcmVzdWx0YWRvcHJvZ3JhbWEvcmVzdWx0YWRvcHJvZ3JhbWEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxTQUFTO0VBQ1QsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQVJwQjtJQVVJLHNDQUFzQyxFQUFBOztBQVYxQztJQWFJLHVDQUF1QyxFQUFBOztBQWIzQztJQWdCSSxzQ0FBc0MsRUFBQTs7QUFoQjFDO0lBbUJJLHNDQUFzQyxFQUFBOztBQW5CMUM7SUFzQkkseUNBQXlDLEVBQUE7O0FBdEI3QztJQXlCSSwyQ0FBMkMsRUFBQTs7QUFJL0M7RUFDRSxrQkFBYSxFQUFBOztBQURmO0lBR0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQ0FBb0MsRUFBQTs7QUFMeEM7TUFPTSxvQ0FBb0MsRUFBQTs7QUFQMUM7TUFVTSxxQ0FBcUMsRUFBQTs7QUFWM0M7TUFhTSxvQ0FBb0MsRUFBQTs7QUFiMUM7TUFnQk0sb0NBQW9DLEVBQUE7O0FBaEIxQztNQW1CTSx1Q0FBdUMsRUFBQTs7QUFuQjdDO01Bc0JNLHlDQUF5QyxFQUFBOztBQXRCL0M7TUF5Qk0sU0FBUztNQUNULG1CQUFtQjtNQUNuQixXQUFXO01BQ1gsaUJBQWlCLEVBQUE7O0FBNUJ2QjtNQStCTSxTQUFTO01BQ1QsV0FBVztNQUNYLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIseUJBQXlCLEVBQUE7O0FBbkMvQjtJQXdDTSxtQkFBbUIsRUFBQTs7QUFLekI7RUFDRSxrQkFBa0IsRUFBQTs7QUFEcEI7SUFHSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVksRUFBQTs7QUFMaEI7TUFPTSxvQ0FBb0MsRUFBQTs7QUFQMUM7TUFVTSxxQ0FBcUMsRUFBQTs7QUFWM0M7TUFhTSxvQ0FBb0MsRUFBQTs7QUFiMUM7TUFnQk0sb0NBQW9DLEVBQUE7O0FBaEIxQztNQW1CTSx1Q0FBdUMsRUFBQTs7QUFuQjdDO01Bc0JNLHlDQUF5QyxFQUFBOztBQXRCL0M7TUF5Qk0sU0FBUztNQUNULFdBQVc7TUFDWCxpQkFBaUI7TUFDakIsaUJBQWlCO01BQ2pCLHlCQUF5QixFQUFBOztBQTdCL0I7SUFrQ0ksb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZXN1bHRhZG9wcm9ncmFtYS9yZXN1bHRhZG9wcm9ncmFtYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmFyZ29sYSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAtMzQlO1xuICBsZWZ0OiAtNSU7XG4gIHdpZHRoOiAxMTAlO1xuICBoZWlnaHQ6IDY0JTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvcGFjaXR5OiAwLjY7XG4gIGJvcmRlcjogNTVweCBzb2xpZDtcbiAgJi5yb3NhIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1yb3NhdG9wKTtcbiAgfVxuICAmLnZlcmRlIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci12ZXJkZXRvcCk7XG4gIH1cbiAgJi5henVsIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1henVsdG9wKTtcbiAgfVxuICAmLnJveG8ge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXJveG90b3ApO1xuICB9XG4gICYubGFyYW5qYSB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGFyYW5qYXRvcCk7XG4gIH1cbiAgJi5henVsQ2xhcm8ge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWF6dWxjbGFyb3RvcCk7XG4gIH1cbn1cblxuaW9uLWNhcmQge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIC5jb250YWluZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEuNXJlbSAwLjVyZW0gMC41cmVtIDAuNXJlbTtcbiAgICAmLnJvc2Ege1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXJvc2F0b3ApO1xuICAgIH1cbiAgICAmLnZlcmRlIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12ZXJkZXRvcCk7XG4gICAgfVxuICAgICYuYXp1bCB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYXp1bHRvcCk7XG4gICAgfVxuICAgICYucm94byB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itcm94b3RvcCk7XG4gICAgfVxuICAgICYubGFyYW5qYSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGFyYW5qYXRvcCk7XG4gICAgfVxuICAgICYuYXp1bENsYXJvIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1henVsY2xhcm90b3ApO1xuICAgIH1cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIH1cbiAgICBoMyB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbiAgfVxuICAudGV4dCB7XG4gICAgcCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cbiAgfVxufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDIxcHg7XG4gICAgYm90dG9tOiAyMXB4O1xuICAgICYucm9zYSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itcm9zYXRvcCk7XG4gICAgfVxuICAgICYudmVyZGUge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXZlcmRldG9wKTtcbiAgICB9XG4gICAgJi5henVsIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1henVsdG9wKTtcbiAgICB9XG4gICAgJi5yb3hvIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1yb3hvdG9wKTtcbiAgICB9XG4gICAgJi5sYXJhbmphIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1sYXJhbmphdG9wKTtcbiAgICB9XG4gICAgJi5henVsQ2xhcm8ge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWF6dWxjbGFyb3RvcCk7XG4gICAgfVxuICAgIGgxIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/resultadoprograma/resultadoprograma.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/resultadoprograma/resultadoprograma.page.ts ***!
  \*************************************************************/
/*! exports provided: ResultadoprogramaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultadoprogramaPage", function() { return ResultadoprogramaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ResultadoprogramaPage = /** @class */ (function () {
    function ResultadoprogramaPage(actRoute, router) {
        this.actRoute = actRoute;
        this.router = router;
    }
    ResultadoprogramaPage.prototype.ngOnInit = function () {
        this.tipoPrograma = this.actRoute.snapshot.params["tipoPrograma"];
        console.log("abacate roxo " + this.tipoPrograma);
        this.montaConteudo(this.tipoPrograma);
    };
    ResultadoprogramaPage.prototype.montaConteudo = function (tipo) {
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
    };
    ResultadoprogramaPage.prototype.saibaMais = function () {
        this.router.navigate(["/obrigado"]);
    };
    ResultadoprogramaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-resultadoprograma",
            template: __webpack_require__(/*! ./resultadoprograma.page.html */ "./src/app/resultadoprograma/resultadoprograma.page.html"),
            styles: [__webpack_require__(/*! ./resultadoprograma.page.scss */ "./src/app/resultadoprograma/resultadoprograma.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ResultadoprogramaPage);
    return ResultadoprogramaPage;
}());



/***/ })

}]);
//# sourceMappingURL=resultadoprograma-resultadoprograma-module.js.map