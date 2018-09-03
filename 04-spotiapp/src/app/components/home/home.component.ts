import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent{

  nuevasCancion: any[]= [];
  constructor(private spotify: SpotifyService) {
  this.spotify.getReleases().subscribe((data: any) => { console.log(data);
    this.nuevasCancion = data;
  });
  }



}
