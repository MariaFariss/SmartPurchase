import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pc } from '../data/ObjetPc';
import { PcServeService } from '../pc-serve.service';

@Component({
  selector: 'app-res-search',
  templateUrl: './res-search.component.html',
  styleUrls: ['./res-search.component.css']
})
export class ResSearchComponent implements OnInit {
  //recuperer la liste des pc dans le json
  public pcListe: Pc[] = [];
  
  //pour afficher les pc
  query: string = '';
  constructor(private pcService: PcServeService, private route: ActivatedRoute) {
    route.queryParams.subscribe((params: any) => this.query = params.query)
   }
  
  ngOnInit(): void {
    // permet de recupere les pcs
    this.pcService.getPc().subscribe(fullData => {
      this.pcListe = fullData
    })
  }
    //fct qui optimise la recherche en cherhant par sous chaine 
    optimiseSearch(pc: Pc, querry: string) : boolean {
      return pc.nom.includes(querry) || pc.marque.includes(querry)|| pc.type.includes(querry);
    }

}
