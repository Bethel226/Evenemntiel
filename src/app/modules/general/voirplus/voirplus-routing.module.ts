import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoirplusComponent } from './voirplus.component';

const routes: Routes = [
  { path: '', component: VoirplusComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoirplusRoutingModule { }