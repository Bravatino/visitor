import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchgridModule } from './layouts/searchgrid/searchgrid.module';
import { HeaderComponent } from './layouts/header/header.component';
import { ApiService } from './shared/apiservice';
import { DataService } from './shared/dataservices';
import { HttpClientModule } from "@angular/common/http";
import { InputformComponent } from './layouts/inputform/inputform.component';
import { HomeComponent } from './layouts/home/home.component';
import { SearchgridComponent } from './layouts/searchgrid/searchgrid.component';
import { SearchgridItemsComponent } from './layouts/searchgrid-items/searchgrid-items.component';
// import { LoginComponent } from './layouts/login/login.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'visitor', component: SearchgridComponent},
  {path: 'visitor/inputform', component: InputformComponent},
  {path: 'staff', component: SearchgridItemsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputformComponent,
    SearchgridComponent,
    HomeComponent,
    SearchgridItemsComponent,
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ApiService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
