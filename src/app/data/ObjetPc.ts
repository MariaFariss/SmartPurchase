import { System } from "./ConfigSystem";
//on definit un pc
export interface Pc {
    nom: string,
    marque: string,
    type: string,
    ecran?: any,
    clavier?: any,
    system: System,
    batterie?: any,
    prix?: number
}
