import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WeatherPageComponent } from './weather-page/weather-page.component';
import { MeAndTheBrosComponent } from './me-and-the-bros/me-and-the-bros.component';



const routes: Routes = [{
  path: 'weather',
  component: WeatherPageComponent
},{
  path: 'me-and-the-bros',
  component: MeAndTheBrosComponent
}, {
  path: '',
  redirectTo: 'weather',
  pathMatch: 'full'
}, {
  path: '**',
  component: PageNotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
