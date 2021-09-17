import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes: string[]=['Spiderman','Ironman','Hulk','Thor','capitan america'];
   x:string= '';

  borrarHeroe() {
    console.log('borrando...');
    this.x = this.heroes.shift() || '';
  
    /* mi manera
   let cantidad = this.heroes.length;
   console.log(cantidad);
   this.heroes.splice(cantidad-1,1)
    */

  }
}
