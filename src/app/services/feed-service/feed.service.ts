import {Injectable} from '@angular/core';
import {Feed} from '../../models/feed/feed';
import {Subject} from 'rxjs';
import {Opinion} from '../../models/opinion/opinion';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private feeds: Feed[] = [
    new Feed(1, 'title', 'some post', this.newDefaultOpinion())
  ];

  public feedSubject: Subject<Feed[]> = new Subject();

  constructor() {
  }

  getAllFeeds(): Feed[] {
    return this.feeds.slice();
  }

  addNewFeed(newFeed: Feed): void {
    newFeed.userOpinion = this.newDefaultOpinion();
    this.feeds.push(newFeed);

    this.feedSubject.next(this.feeds.slice());
  }

  newDefaultOpinion(): Opinion {
    return new Opinion('none');
  }
}
