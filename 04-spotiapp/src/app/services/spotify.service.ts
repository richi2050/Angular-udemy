import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  //console.log('spotifi listo');
 }


 getQuery(query: string){
   const url = `https://api.spotify.com/v1/${ query }`;

   const headers = new HttpHeaders ( { 'Authorization' : 'Bearer BQCEoD7J7Fy0PtN736ngW9AGe5GbaEm8rfjwJ8le02mHDSVXSurZRhnA-F07E6i3tT45qxspAcgQhPqlkPo' } );

   return this.http.get(url ,{ headers });

 }

   getReleases() {
     return this.getQuery('browse/new-releases?limit=20').pipe( map( data =>  data['albums'].items));
   }

   getArtistas(termino: string) {
   return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map( data => data['artists'].items ));
   }

   getArtista(id: string) {

    return this.getQuery(`artists/${id}`);
    //.pipe(map( data => data['artists'].items ));

   }
   getTopTrack(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=ES`)
    .pipe(map( data => data['tracks'] ));
   }
}
