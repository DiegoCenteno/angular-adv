import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Grafica1Component,
        PagesComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Grafica1Component,
        PagesComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ComponentsModule,
        SharedModule,
        RouterModule
    ]
})
export class PagesModule { }
