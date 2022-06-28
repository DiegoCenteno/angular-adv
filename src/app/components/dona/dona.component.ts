import { Component, Input, SimpleChanges } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
    selector: 'app-dona',
    templateUrl: './dona.component.html',
    styles: [
    ]
})
export class DonaComponent {

    @Input() titulo: string = '';
    @Input() data: number[] = [30,30,30];
    @Input() bgc: string[] = ['#000000', '#3359f4', '#EEFD35'];

    constructor() {
        console.log(this.titulo);
        
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.doughnutChartData = {
            labels: this.doughnutChartLabels,
            datasets:[{ data: this.data, backgroundColor:this.bgc}]
        }
        
    }



    @Input('labels') doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    public doughnutChartData: ChartData<'doughnut'> = {
        labels: this.doughnutChartLabels,
        datasets: [
            {
                data: this.data,
                backgroundColor: this.bgc
            },

        ]
    };
    public doughnutChartType: ChartType = 'doughnut';

}
