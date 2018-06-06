import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchgridModule } from './layouts/searchgrid/searchgrid.module';
import { HomeModule } from './layouts/home/home.module';
import { HeaderComponent } from './layouts/header/header.component';
import { ApiService } from './shared/apiservice';
import { DataService } from './shared/dataservices';
import { HttpClientModule } from "@angular/common/http";
import { InputformComponent } from './layouts/inputform/inputform.component';



const rootRouting: ModuleWithProviders = RouterModule.forRoot([
  { path: '', redirectTo: '/', pathMatch: 'full' }
], {useHash: true});

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputformComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    rootRouting,
    SearchgridModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
