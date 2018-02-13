import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AgmCoreModule } from '@agm/core';


import { routing } from './app.routing';
import { DataService } from './dataService';

import { AppComponent } from './app.component';
import { HakkindaComponent } from 'app/pages/hakkinda/hakkinda';
import { DashboardComponent } from 'app/pages/dashboard/dashboard';
import { MenuComponent } from 'app/pages/menu/menu';
import { IletisimComponent } from 'app/pages/iletisim/iletisim';
import { ProjectComponent } from 'app/pages/project/project';
import { EditComponent } from 'app/pages/project/edit';
import { LoginComponent } from 'app/pages/login/login';
import { MapComponent } from 'app/pages/map/map';


@NgModule({
  declarations: [
    AppComponent,
    HakkindaComponent,
    DashboardComponent,
    MenuComponent,
    IletisimComponent,    
    ProjectComponent,
    EditComponent,
    LoginComponent,
    MapComponent
    
    
 
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    HttpModule,
    routing,
    ModalModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBP8oJmYN8_l-xZBJJyOnsqjud0yfLs1Rk'
    })
   
  ],
  entryComponents: [
    EditComponent,
    LoginComponent
    
    
],
  providers: [ DataService],
  bootstrap: [MenuComponent]
})
export class AppModule { }
