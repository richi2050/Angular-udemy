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

   const headers = new HttpHeaders ( { 'Authorization' : 'Bearer BQDkcWCYaQVZAXPNzEILXv6Lpv9SSst4o4-KD5at9hnq1QVX4Xnrs_EUu9YctEc--xgt2Cp_C_tA5Nqumac' } );

   return this.http.get(url ,{ headers })

 }

   getReleases() {
     return this.getQuery('browse/new-releases?limit=20').pipe( map( data =>  data['albums'].items));
   }

   getArtista(termino: string) {
   return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map( data => data['artists'].items ));
   }
}
