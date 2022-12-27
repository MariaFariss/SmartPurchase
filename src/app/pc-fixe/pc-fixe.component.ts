import { Component, OnInit } from '@angular/core';
import { Pc } from '../data/ObjetPc';
import { PcServeService } from '../pc-serve.service';

@Component({
  selector: 'app-pc-fixe',
  templateUrl: './pc-fixe.component.html',
  styleUrls: ['./pc-fixe.component.css']
})
export class PcFixeComponent implements OnInit {
  public pcListe: Pc[] = []; //on crée une liste des pc pour filtrer les pc fixe dans le html
  
  constructor(private pcService: PcServeService) { } //on injecte le service pc-serve.service.ts dans le constructeur

  ngOnInit(): void {
    this.pcService.getPc().subscribe(fullData => { //on récupère les données de la méthode getPc() dans le service pc-serve.service.ts
      this.pcListe = fullData
    })
    
  }
}
