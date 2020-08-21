import { Subject } from 'rxjs';

export class Subscriber {
  // tslint:disable-next-line:variable-name
  private _done = new Subject();
  public get done() {
    return this._done;
  }

  complete() {
    this.done.next();
    this.done.complete();
  }
}
