import { ModuleWithProviders, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: '',
        component:  HomeComponent 
    }
]);

@NgModule({
    imports: [
        homeRouting
    ],
    declarations: [
        HomeComponent
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    providers: []
})

export class HomeModule {} 
