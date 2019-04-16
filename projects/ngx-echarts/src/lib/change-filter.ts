import { SimpleChanges } from '@angular/core';
import { Observable, of, EMPTY } from 'rxjs';

export class ChangeFilter {
  constructor(private _changes: SimpleChanges) { }

  static of(changes: SimpleChanges) {
    return new ChangeFilter(changes);
  }

  notEmpty<T>(key: string): Observable<T> {
    if (this._changes[key]) {
      const value: T = this._changes[key].currentValue;

      if (value !== undefined && value !== null) {
        return of(value);
      }
    }
    return EMPTY;
  }

  has<T>(key: string): Observable<T> {
    if (this._changes[key]) {
      const value: T = this._changes[key].currentValue;
      return of(value);
    }
    return EMPTY;
  }

  notFirst<T>(key: string): Observable<T> {
    if (this._changes[key] && !this._changes[key].isFirstChange()) {
      const value: T = this._changes[key].currentValue;
      return of(value);
    }
    return EMPTY;
  }

  notFirstAndEmpty<T>(key: string): Observable<T> {
    if (this._changes[key] && !this._changes[key].isFirstChange()) {
      const value: T = this._changes[key].currentValue;

      if (value !== undefined && value !== null) {
        return of(value);
      }
    }
    return EMPTY;
  }
}
