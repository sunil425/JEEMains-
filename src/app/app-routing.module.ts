import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhyComponent } from './phy/phy.component';
import { ChemistryComponent } from './chemistry/chemistry.component';
import { MathsComponent } from './maths/maths.component';

const routes: Routes = [

  {path : '' , redirectTo:'/quiz/phy' , pathMatch:'full'},
  {path : 'quiz/phy' , component:PhyComponent},
  {path : 'quiz/math' , component:MathsComponent},
  {path : 'quiz/chem' , component:ChemistryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
