import {Route, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {NgModule} from '@angular/core';

const MAIN_ROUTES: Route[] = [
  {
    path: '', component: MainComponent,
    children: [
      {path: 'news_feed', loadChildren: () => import('./feed-module/feed.module').then(m => m.FeedModule)}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(MAIN_ROUTES)],
  exports: [RouterModule]
})
export class MainRouting {
}
