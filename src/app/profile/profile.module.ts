import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario.component';

const routes:Routes = [
  {path:'',component:ProfileComponent, children:[
  {path:'formulario',component:FormularioComponent}
]},
]

@NgModule({
  declarations: [
    ProfileComponent,
    FormularioComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ]
})
export class ProfileModule { }
