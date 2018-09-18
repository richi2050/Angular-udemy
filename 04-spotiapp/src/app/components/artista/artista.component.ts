import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {
  artista: any = {};
  topTracks: any[] = [];
  loadingArtist: boolean;
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loadingArtist = true;
    this.router.params.subscribe( params => {
      this.getArtista( params['id']);
      this.getTopTrack( params['id']);

    });
   }

   getArtista(id: string) {
    this.loadingArtist = true;
      this.spotify.getArtista( id ).subscribe( params => {
        this.artista = params;
        //console.log(artista);
        this.loadingArtist = false;
      });
   }
   getTopTrack(id: string) {
      this.spotify.getTopTrack( id ).subscribe( topTracks => {
        console.log(topTracks);
        this.topTracks = topTracks;
      });
   }

}
