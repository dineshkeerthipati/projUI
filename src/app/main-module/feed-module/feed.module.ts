import {NgModule} from '@angular/core';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import {FeedRouting} from './feed.routing';
import {CommonModule} from '@angular/common';
import { AddFeedComponent } from './add-feed/add-feed.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FeedListComponent } from './feed-list/feed-list.component';

@NgModule({
  declarations: [NewsFeedComponent, AddFeedComponent, FeedListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FeedRouting
  ]
})
export class FeedModule {}
