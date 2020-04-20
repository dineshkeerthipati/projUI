import {Opinion} from '../opinion/opinion';

export class Feed {
  constructor(public id: number, public title: string, public post: string,
              public likes: number, public unLikes: number, public userOpinion?: Opinion) {}
}
