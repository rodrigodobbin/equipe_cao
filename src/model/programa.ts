export interface Programa {
    tipoInter: string,
    faixaEtaria: number,
    escolaridade: string[],
    destinos: string[],
    nivel: string[],
    duracao: number,
    acomodacao: string[],
    gostaCrianca: boolean,
    sexo: string,
    curso?: string,
    cursoCode?: number
}