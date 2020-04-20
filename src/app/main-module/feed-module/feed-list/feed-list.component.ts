import {Component, OnDestroy, OnInit} from '@angular/core';
import {Feed} from '../../../models/feed/feed';
import {FeedService} from '../../../services/feed-service/feed.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.css']
})
export class FeedListComponent implements OnInit, OnDestroy {

  newsFeedList: Feed[];
  subscription: Subscription = new Subscription();
  likesCount: number;
  unLikesCount: number;
  // disableOpinion = 'none';

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.newsFeedList = this.feedService.getAllFeeds();
    this.subscription = this.feedService.feedSubject.subscribe((newsFeed: Feed[]) => {
      this.newsFeedList = newsFeed;
    });
    this.likesCount = 0;
    this.unLikesCount = 0;
  }

  onOpinion(opinion: string, index: number): void {
    if (opinion === 'like') {
      console.log('like');
      if (this.newsFeedList[index].userOpinion.disableOpinion === opinion) {
        this.likesCount = 0;
        this.newsFeedList[index].userOpinion.disableOpinion = 'none';
      } else {
        this.likesCount++;
        this.newsFeedList[index].userOpinion.disableOpinion = opinion;
      }
    } else if (opinion === 'unLike') {
      console.log('unLike');
      if (this.newsFeedList[index].userOpinion.disableOpinion === opinion) {
        this.unLikesCount = 0;
        this.newsFeedList[index].userOpinion.disableOpinion = 'none';
      } else {
        this.unLikesCount++;
        this.newsFeedList[index].userOpinion.disableOpinion = opinion;
      }
      console.log('disableOpinion', this.newsFeedList);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
