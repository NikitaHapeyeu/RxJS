import { Observable } from 'rxjs/Observable';
import { onNext } from './callbacks';

// *** Subscribe
export function subscribe() {
    const stream$ = Observable.create(observer => {
        let i = 0;
        let id = setInterval(() => {
            observer.next(i++);
        }, 1000);

        return function () {
            clearInterval(id);
        }
    });

    const sub = stream$.subscribe(onNext);

    setTimeout(() => sub.unsubscribe(), 2000);
}