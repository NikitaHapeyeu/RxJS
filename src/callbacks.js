// колбек на следующее значение
export function onNext(val) {
    console.log(val);
}

// колбек на ошибку
export function onError(error) {
    console.log(error);
}

// колбек на завершение потока
export function onComplete() {
    console.log('Complete');
}

export function onSuccess(val) {
    console.log(val);
}