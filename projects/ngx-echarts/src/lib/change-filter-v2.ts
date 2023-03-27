import { SimpleChanges } from '@angular/core';
import { ReplaySubject, Subscription } from 'rxjs';

export class ChangeFilterV2 {
  private subject = new ReplaySubject<SimpleChanges>(1);
  private subscriptions: Subscription = new Subscription();

  doFilter(changes: SimpleChanges) {
    this.subject.next(changes);
  }

  dispose() {
    this.subscriptions.unsubscribe();
  }

  notEmpty<T>(key: string, handler: (t: T) => void) {
    this.subscriptions.add(this.subject.subscribe(changes => {
      if (changes[key]) {
        const value: T = changes[key].currentValue;
        if (value !== undefined && value !== null) {
          handler(value);
        }
      }
    }));
  }

  has<T>(key: string, handler: (t: T) => void) {
    this.subscriptions.add(this.subject.subscribe(changes => {
      if (changes[key]) {
        const value: T = changes[key].currentValue;
        handler(value);
      }
    }));
  }

  notFirst<T>(key: string, handler: (t: T) => void) {
    this.subscriptions.add(this.subject.subscribe(changes => {
      if (changes[key] && !changes[key].isFirstChange()) {
        const value: T = changes[key].currentValue;
        handler(value);
      }
    }));
  }

  notFirstAndEmpty<T>(key: string, handler: (t: T) => void) {
    this.subscriptions.add(this.subject.subscribe(changes => {
      if (changes[key] && !changes[key].isFirstChange()) {
        const value: T = changes[key].currentValue;
        if (value !== undefined && value !== null) {
          handler(value);
        }
      }
    }));
  }
}
