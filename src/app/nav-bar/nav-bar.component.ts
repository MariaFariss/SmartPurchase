import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  //on cree un formulaire de recherche qui va contenir un champ de recherche 
  searchFormGroup: FormGroup = new FormGroup({
    search: new FormControl('')
  })
  constructor(private router: Router) { }

  ngOnInit(): void {
    //pour le menu burger 
    var hamburgerToggler = document.querySelector<HTMLElement>(".hamburger")! //on recupere le bouton
    var navLinksContainer = document.querySelector<HTMLElement>(".navlinks-container")! //on recupere ce qui va contenir le menu

    const toggleNav = () => {
      hamburgerToggler.classList.toggle("open") 

      const ariaToggle = hamburgerToggler.getAttribute("aria-expanded") === "true" ?  "false" : "true"; 
      hamburgerToggler.setAttribute("aria-expanded", ariaToggle)

      navLinksContainer.classList.toggle("open")
    }
    hamburgerToggler.addEventListener("click", toggleNav)

    new ResizeObserver(entries => {
      if(entries[0].contentRect.width <= 900){
        navLinksContainer.style.transition = "transform 0.3s ease-out"
      } else {
        navLinksContainer.style.transition = "none"
      }
    }).observe(document.body)
  
  } 
  //on recupere la valeur du champ de recherche
  onSubmit() {
    this.router.navigate(['resSearch'], { queryParams: { query: this.searchFormGroup.value.search } })
  }

}
