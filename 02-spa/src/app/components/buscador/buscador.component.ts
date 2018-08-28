import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HeroesService} from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:any[] =[];
  termino:string;

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService,
              private _router:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroe(params['termino']);
      console.log(this.heroes);
    })
  }

  verHeroe(idx:number){
    console.log('este es el id: '+idx);
    this._router.navigate(['/heroe',idx]);
  }

}
