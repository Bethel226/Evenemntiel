import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoirplusComponent } from './voirplus.component';
import { VoirplusRoutingModule } from './voirplus-routing.module';

@NgModule({
  imports: [
    CommonModule,
    VoirplusRoutingModule
  ],
  exports: [
    VoirplusComponent
  ],
  declarations: [
    VoirplusComponent
  ],
  providers: [
  ],
})
export class VoirplusModule { }