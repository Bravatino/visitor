import { ModuleWithProviders, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';


@NgModule({
    imports: [
    ],
    declarations: [
        HomeComponent
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    providers: []
})

export class HomeModule {} 
