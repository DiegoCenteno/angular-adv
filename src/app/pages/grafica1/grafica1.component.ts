import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-grafica1',
    templateUrl: './grafica1.component.html',
    styles: [
    ]
})
export class Grafica1Component implements OnInit {

    lab_g1: string[] = ['Titulo 1', 'Titulo 2', 'Titulo 3'];
    lab_g2: string[] = ['Otro tit 1', 'Otro tit 2', 'Otro tit 3'];
    bgc1: string[] = ['#0B8484', '#B70D21', '#097C2C'];
    datag1: number[] = [100, 300, 700];
    
    constructor() { }

    ngOnInit(): void {
    }

    
}
