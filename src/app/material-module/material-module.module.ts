import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

const materialComponents=[
  MatButtonModule,
  MatInputModule,
  MatCardModule
]

@NgModule({
imports:[materialComponents],
exports:[materialComponents]
})
export class MaterialModuleModule { }
