import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'room/:id',
    component: RoomComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
