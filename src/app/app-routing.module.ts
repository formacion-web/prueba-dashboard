import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormularioComponent } from './profile/formulario.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'profile',component:ProfileComponent,
  children:[
    {path:'formulario',component:FormularioComponent}
  ]}
  // {path:'profile',  loadChildren: ()=>import('./profile/profile.module').then(m=>m.ProfileModule), pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
