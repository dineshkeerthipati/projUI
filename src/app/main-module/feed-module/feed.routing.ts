import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {NewsFeedComponent} from './news-feed/news-feed.component';

const FEED_ROUTES: Route[] = [
  {path: '', component: NewsFeedComponent, pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forChild(FEED_ROUTES)],
  exports: [RouterModule]
})
export class FeedRouting {}
