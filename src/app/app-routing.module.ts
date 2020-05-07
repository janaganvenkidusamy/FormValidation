import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonaldetComponent } from './personaldet/personaldet.component';
import { CommpanydetComponent } from './commpanydet/commpanydet.component';
import { EmailverificationComponent } from './emailverification/emailverification.component';

const routes: Routes = [
  {path:'', redirectTo:'personal', pathMatch:'full'},
  {path:'personal', component:PersonaldetComponent},
  {path:'company', component:CommpanydetComponent},
  {path:'Verification', component:EmailverificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
