import {
    CARD_REQUEST,
    CARD_SUCCESS,
    CARD_FAILURE,
    GET_INFO_DEPT,
    GET_INFO_DEPT_SUCCESS,
    GET_INFO_DEPT_FAILURE,
} from "../actions/types"

import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

function cardRequestAPI(){
    return axios.get('http://13.125.235.4:3000/wallet')
}

function getInfoOfDeptAPI(id){
    return axios.get(`http://13.125.235.4:3000/department/${id}`)
}

function* cardRequest(action){
    try{
        const result = yield call(cardRequestAPI);
        console.log(result);
        yield put({
            type: CARD_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.log("검색실패")
        yield put({
            type: CARD_FAILURE,
            data: err.response.data,
        })
    }
}

function* getInfoOfDept(action){
    console.log(action);
    try{
        const result = yield call(getInfoOfDeptAPI, action.data);
        yield put({
            type: GET_INFO_DEPT_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.log("검색실패")
        yield put({
            type: GET_INFO_DEPT_FAILURE,
            data: err.response.data,
        })
    }
}

function* watchCardRuest() {
    yield takeLatest(CARD_REQUEST, cardRequest)
}

function* watchGetInfoOfDept() {
    yield takeLatest(GET_INFO_DEPT, getInfoOfDept)
}

export default function* cardSaga(){
    yield all([
        fork(watchCardRuest),
        fork(watchGetInfoOfDept),
    ])
}