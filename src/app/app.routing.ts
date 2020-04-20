import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

const APP_ROUTES: Route[] = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', loadChildren: () => import('./main-module/main.module').then(m => m.MainModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRouting {}
