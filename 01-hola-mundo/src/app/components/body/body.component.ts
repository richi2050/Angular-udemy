import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent{
  mostrar = true;
  frase : any = {
    autor : 'Ricardo Lugo',
    frase : 'Esta es mi frase'
  }
  personas:  string[] =['Ricardo', 'Karla', 'Gabriel','Fernando'];


}
