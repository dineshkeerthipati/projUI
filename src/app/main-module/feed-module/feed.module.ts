import {NgModule} from '@angular/core';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import {FeedRouting} from './feed.routing';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [NewsFeedComponent],
  imports: [CommonModule, FeedRouting]
})
export class FeedModule {}
