import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { onNext, onSuccess } from './callbacks';

// *** Observable vs Promise
export function observable_promise() {
    // Observable
    const stream$ = Observable.from([1, 2, 3]);

    stream$.subscribe(onNext);

    // Promise
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([1, 2, 3])
        }, 0);
    });

    promise.then(onSuccess);
}