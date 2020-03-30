import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {MainRouting} from './main.routing';
import {LeftMenuComponent} from './left-menu/left-menu.component';

@NgModule({
  declarations: [
    MainComponent,
    LeftMenuComponent
  ],
  imports: [
    CommonModule,
    MainRouting
  ]
})
export class MainModule { }
