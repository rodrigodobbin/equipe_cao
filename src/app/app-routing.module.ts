import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", loadChildren: "./home/home.module#HomePageModule" },
  {
    path: "idade/:tipoInter",
    loadChildren: "./idade/idade.module#IdadePageModule"
  },
  {
    path: "hospedagem/:tipoInter/:faixaEtaria",
    loadChildren: "./hospedagem/hospedagem.module#HospedagemPageModule"
  },
  {
    path: "formacao/:tipoInter/:faixaEtaria/:acomodacao",
    loadChildren: "./formacao/formacao.module#FormacaoPageModule"
  },
  {
    path: "pais/:tipoInter/:faixaEtaria/:acomodacao/:escolaridade",
    loadChildren: "./pais/pais.module#PaisPageModule"
  },
  {
    path: "idioma/:tipoInter/:faixaEtaria/:acomodacao/:escolaridade/:pais",
    loadChildren: "./idioma/idioma.module#IdiomaPageModule"
  },
  {
    path:
      "genero/:tipoInter/:faixaEtaria/:acomodacao/:escolaridade/:pais/:nivel",
    loadChildren: "./genero/genero.module#GeneroPageModule"
  },
  {
    path:
      "crianca/:tipoInter/:faixaEtaria/:acomodacao/:escolaridade/:pais/:nivel/:genero",
    loadChildren: "./crianca/crianca.module#CriancaPageModule"
  },
  { path: 'crianca', loadChildren: './crianca/crianca.module#CriancaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
