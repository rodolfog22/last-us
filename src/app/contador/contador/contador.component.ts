import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    template: `
    <h1>Hola Mundo</h1>
    <h1>{{titulo}}</h1>

    <button (click)="acumular(+base);">+5</button>

    <span>{{numero}}</span>

    <button (click)="acumular(-base);">-5</button>

    `
}) 

export class ContadorComponent {
    titulo = 'CONTADOR';
    numero: number= 10;
  
    base: number =5;
    acumular(valor: number){
    this.numero = this.numero + valor;
    }
    
}