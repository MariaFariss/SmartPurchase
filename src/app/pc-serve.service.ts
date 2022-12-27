import { HttpClient } from '@angular/common/http';//pour faire un requete http on importe le module HttpClient
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Pc } from './data/ObjetPc';
 
@Injectable({
  providedIn: 'root'
})
export class PcServeService {

  constructor(private http: HttpClient) { }
  getPc(): Subject<Pc[]> {

    let sub = new Subject<Pc[]>();

    let urlService = `http://localhost:4200/assets/pcs.json`; //on cree l'url du json

    this.http.get<Pc[]>(urlService).subscribe( //on recupere les donnees du json  et on les met dans la variable pcListe 
      (pc: Pc[]) => {
        sub.next(pc);
      }
    )
    return sub;
  }
}
