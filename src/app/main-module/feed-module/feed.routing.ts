import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {NewsFeedComponent} from './news-feed/news-feed.component';
import {AddFeedComponent} from './add-feed/add-feed.component';

const FEED_ROUTES: Route[] = [
  {path: '', component: NewsFeedComponent, pathMatch: 'full'},
  {path: 'post', component: AddFeedComponent}
];
@NgModule({
  imports: [RouterModule.forChild(FEED_ROUTES)],
  exports: [RouterModule]
})
export class FeedRouting {}
