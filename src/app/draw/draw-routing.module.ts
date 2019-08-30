import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrawComponent } from './draw.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: DrawComponent,
    children: [
      {
        path: '',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrawRoutingModule { }
