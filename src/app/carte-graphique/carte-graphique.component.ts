import { Component, OnInit } from '@angular/core';
import { CG } from '../data/CG';
import { Pc } from '../data/ObjetPc';
import { PcServeService } from '../pc-serve.service';

@Component({
  selector: 'app-carte-graphique',
  templateUrl: './carte-graphique.component.html',
  styleUrls: ['./carte-graphique.component.css']
})
export class CarteGraphiqueComponent implements OnInit {
  //recuperer la liste des CG carte graphique et les pc dans le json
  public cgListe: CG[] = [];
  public pcListe: Pc[] = [];
  public pc: Pc;
  public image: string; //on declare une variable image dans laquelle on cree le path de l'image on faisant la concatenation du marque+type
  constructor(private pcService: PcServeService) { }

  ngOnInit(): void {
    // permet de recupere les pcs
    this.pcService.getPc().subscribe(fullData => {
      this.pcListe = fullData
      // permet de recupere les CG carte graphique
      //ajouter un CG carte graphique dans la liste des CG carte graphique qui se trouve dans la liste des pc
      let flag = false; //on cree une variable flag pour savoir si le CG carte graphique est deja dans la liste des CG carte graphique
      for (let e of this.pcListe) { //on parcours la liste des pc
        for (let i of this.cgListe) {//on parcours la liste des CG carte graphique
          if (e.system.cg.marque == i.marque && e.system.cg.modele == i.modele && e.system.cg.score == i.score) {//on verifie si e a le meme marque et le meme modele et le meme score que i pour ne pas avoir de doublon
            flag = true;
          }
        }
        if (flag == false) { //si flag est a false alors on ajoute le CG carte graphique dans la liste des CG carte graphique
          this.cgListe.push(e.system.cg);
        }
        flag = false;//on remet flag a false pour le prochain pc
      }
    })


  }


}
