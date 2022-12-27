//on fait l'import de la carte graphique
import { CG } from "./CG";
// on definit un system 
export interface System {
    ram?: number,
    cpu?: any,
    hdd?: any,
    cg: CG,
}