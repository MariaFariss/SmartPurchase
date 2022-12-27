import { Component, OnInit } from '@angular/core';
import { Pc } from '../data/ObjetPc';
import { PcServeService } from '../pc-serve.service';

@Component({
  selector: 'app-pc-portable',
  templateUrl: './pc-portable.component.html',
  styleUrls: ['./pc-portable.component.css']
})
export class PcPortableComponent implements OnInit {
  public pcListe: Pc[] = []; //on crée un tableau de pc POUR les pc portable (on crée une liste des pc pour filtrer les pc portable dans le html)
  constructor(private pcService: PcServeService) { }

  ngOnInit(): void {
    this.pcService.getPc().subscribe(fullData => { //on récupère les données de la méthode getPc() dans le service pc-serve.service.ts
      this.pcListe = fullData
    });
  }

}
