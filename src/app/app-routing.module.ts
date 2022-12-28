import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './modules/general/about/about.component';
import { AcheterComponent } from './modules/general/acheter/acheter.component';
import { ContactComponent } from './modules/general/contact/contact.component';
import { EvenementComponent } from './modules/general/evenement/evenement.component';
import { VoirplusComponent } from './modules/general/voirplus/voirplus.component';

import { HomeComponent } from './modules/general/home/home.component';
import { LoginComponent } from './modules/general/login/login.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { SignupComponent } from './modules/general/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'about', component: AboutComponent, },
  { path: 'contact', component: ContactComponent, },
  { path: 'login', component: LoginComponent, },
  { path: 'signup', component: SignupComponent, },
  { path: 'evenement', component: EvenementComponent, },
  { path: 'evenement', children: [
    {path: 'evenement/voirplus', component: VoirplusComponent},
    {path: 'evenement/acheter', component: AcheterComponent},
  ]},
  // { path: 'acheter', component: AcheterComponent, },
  // { path: 'voirplus', component: VoirplusComponent, },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }