import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HakkindaComponent } from './pages/hakkinda/hakkinda';
import { ROUTES } from '@angular/router/src/router_config_loader';
import { DashboardComponent } from 'app/pages/dashboard/dashboard';
import { IletisimComponent } from 'app/pages/iletisim/iletisim';
import { ProjectComponent } from 'app/pages/project/project';
import { LoginComponent } from 'app/pages/login/login';
import { MapComponent } from 'app/pages/map/map';


const appRoutes: Routes = [
  { path: 'Hakkinda', component: HakkindaComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Iletisim', component: IletisimComponent },
  { path: 'Project', component: ProjectComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Map', component: MapComponent },
  { path: '', component: DashboardComponent }
];

export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);