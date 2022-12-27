import { Component, Input, OnInit } from '@angular/core';
import { Pc } from '../data/ObjetPc';

@Component({
  selector: 'app-pc-componant',
  templateUrl: './pc-componant.component.html',
  styleUrls: ['./pc-componant.component.css']
})
export class PcComponantComponent implements OnInit {
  @Input() //un decorateur pour creer un component qu'on le donne en ligne de commande
  public pc: Pc;
  public image: string; //on declare une variable image dans laquelle on cree le path de l'image on faisont la concatenation du marque+type
  constructor() { }

  ngOnInit(): void {
    this.image = './../../assets/resSearch/'+this.pc.marque+this.pc.type+'.png'; //on cree le path de l'image on fait une concatenation par marque+type 
  }

}
