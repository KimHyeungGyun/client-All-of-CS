import { all, fork, call, put } from 'redux-saga/effects';

import searchSaga from './search';
import cardSaga from './wallet'

export default function* rootSaga(){
    yield all([
        fork(searchSaga),
        fork(cardSaga),
    ])
}