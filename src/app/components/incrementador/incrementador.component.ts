import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-incrementador',
    templateUrl: './incrementador.component.html',
    styles: [
    ]
})
export class IncrementadorComponent {

    @Input('valor') progreso: number = 20;
    @Input() btnClass: string = 'btn btn-primary';

    @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter;

    cambiarValor(valor: number) {
        if (this.progreso >= 100 && valor >= 0)
            this.progreso = 100;
        else if (this.progreso <= 0 && valor < 0)
            this.progreso = 0;
        else
            this.progreso += valor;
        this.valorSalida.emit(this.progreso);
    }

    onChange(e: number) {
        if (e >= 100){
            this.progreso = 100;
        }
        else if (e <= 0){
            this.progreso = 0;
        }
        else{
            this.progreso = e;
        }
        this.valorSalida.emit(this.progreso);
            
    }

    constructor() { }

}
