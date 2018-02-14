import { SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';

export class ChangeFilter {
  constructor(private _changes: SimpleChanges) { }

  static of(changes: SimpleChanges) {
    return new ChangeFilter(changes);
  }

  notEmpty<T>(key: string): Observable<T> {
    if (this._changes[key]) {
      let value: T = this._changes[key].currentValue;

      if (value !== undefined && value !== null) {
        return Observable.of(value);
      }
    }
    return Observable.empty();
  }

  has<T>(key: string): Observable<T> {
    if (this._changes[key]) {
      let value: T = this._changes[key].currentValue;
      return Observable.of(value);
    }
    return Observable.empty();
  }
}
