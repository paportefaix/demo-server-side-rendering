import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MapageComponent} from "./mapage/mapage.component";

const routes: Routes = [
  { path: 'mapage', component: MapageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
