import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawRoutingModule } from './draw-routing.module';
import { DrawComponent } from './draw.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { CanvasComponent } from './game/components/canvas/canvas.component';
import { GuessBoxComponent } from './game/components/guess-box/guess-box.component';


@NgModule({
  declarations: [DrawComponent, HomeComponent, GameComponent, CanvasComponent, GuessBoxComponent],
  imports: [
    CommonModule,
    DrawRoutingModule
  ]
})
export class DrawModule { }
