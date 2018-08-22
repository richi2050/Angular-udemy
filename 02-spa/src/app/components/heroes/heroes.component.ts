import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _heroesServices:HeroesService,
                private _router:Router) {

   }

  ngOnInit() {
    this.heroes = this._heroesServices.getHeroes();
  }
  verHeroe(idx:number){
    console.log('este es el id: '+idx);
    this._router.navigate(['/heroe',idx]);
  }

}
