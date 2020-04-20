import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {FeedService} from '../../../services/feed-service/feed.service';

@Component({
  selector: 'app-add-feed',
  templateUrl: './add-feed.component.html',
  styleUrls: ['./add-feed.component.css']
})
export class AddFeedComponent implements OnInit {
  feedForm: FormGroup;

  constructor(private fb: FormBuilder, private _location: Location, private feedService: FeedService) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.feedForm = this.fb.group({
      title: this.fb.control('', Validators.compose([Validators.required])),
      post: this.fb.control('', Validators.compose([Validators.required]))
    });
  }

  submitPost(): void {
    console.log(this.feedForm.value);
    this.feedService.addNewFeed(this.feedForm.value);
    this.onGoBack();
  }

  onGoBack(): void {
    this._location.back();
  }

}
