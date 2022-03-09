import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http'

import { IonicModule } from '@ionic/angular';

import { RecetasPageRoutingModule } from './recetas-routing.module';

import { RecetasPage } from './recetas.page';
import { RecetaComponent } from '../componentes/receta/receta.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetasPageRoutingModule,
    // HttpClientModule
  ],
  declarations: [
    RecetasPage,
    RecetaComponent
  ]
})
export class RecetasPageModule {}
