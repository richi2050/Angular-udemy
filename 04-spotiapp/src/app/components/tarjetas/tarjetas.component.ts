import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

  @Input() items: any[] = [];

  constructor( private router: Router) { }

  VerArtista( item: any){
    //console.log(item);
    let artisId;

    if (item.type === 'artist' ) {
      artisId = item.id;
    } else {
      artisId = item.artists[0].id;
    }
    this.router.navigate(['/artist',artisId]);

  }



}
