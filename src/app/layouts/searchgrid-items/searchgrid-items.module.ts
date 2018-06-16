import { ModuleWithProviders, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchgridItemsComponent } from './searchgrid-items.component';


@NgModule({
  imports: [
  ],
  declarations: [
      SearchgridItemsComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: []
})
export class SearchgridItemsModule { }
