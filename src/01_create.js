import { Observable } from 'rxjs/Observable';
import { onNext, onError, onComplete } from './callbacks';

// *** Create ***
export function create() {

    // onNext
    const stream1$ = Observable.create(observer => observer.next('next!'));
    stream1$.subscribe(onNext);

    // onError
    const stream2$ = Observable.create(observer => observer.error('Error'));
    stream2$.subscribe(onNext, onError);

    // onComplete
    const stream3$ = Observable.create(observer => observer.complete());
    stream3$.subscribe(onNext, onError, onComplete);

}