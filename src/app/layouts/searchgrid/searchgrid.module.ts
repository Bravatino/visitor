import { ModuleWithProviders, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchgridComponent } from './searchgrid.component';


@NgModule({
    imports: [
    ],
    declarations: [
        SearchgridComponent
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    providers: []
})

export class SearchgridModule {} 

