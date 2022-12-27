import { Component, OnInit } from '@angular/core';
import { Pc } from '../data/ObjetPc';
import { PcServeService } from '../pc-serve.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pcListe: Pc[] = [];
  public pc: Pc; 
  public image: string;
  constructor(private pcService: PcServeService) { }

  ngOnInit(): void {
    this.pcService.getPc().subscribe(fullData => {
      this.pcListe = fullData
      this.image = './../../assets/resSearch/'+this.pc.marque+this.pc.type+'.png'; //on cree le path de l'image on concatenant la marque et le type
    })
    
  }

}
