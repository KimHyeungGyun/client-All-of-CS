import {
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
    DEPARTMENTS_REQUEST,
    SEARCH_DEPARTMENTS_SUCCESS,
    SEARCH_DEPARTMENTS_FAILURE,
    INFO_REQUEST,
    INFO_SUCCESS,
    INFO_FAILURE,
    REGISTER_WALLET,
    REGISTER_WALLET_SUCCESS,
    REGISTER_WALLET_FAILURE,
} from "../actions/types"

import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

function searchAPI(search){
    const server = "http://13.125.235.4:3000";
    const url = `${server}/tags?tag_name=${search}`;
    return axios.get(url)
}

function searchDepartmentsAPI(id){
    const server = "http://13.125.235.4:3000";
    const url = `${server}/company/${id}`;
    return axios.get(url)
}

function searchInfoAPI(id){
    const server = "http://13.125.235.4:3000";
    const url = `${server}/department/${id}`;
    return axios.get(url)
}

function registerWalletAPI(data){
    const body = {
        "id": data
    }
    console.log(body)
    const server = "http://13.125.235.4:3000";
    const url = `${server}/wallet`;
    return axios.post(url, body)
}

function* search(action){
    try{
        const result = yield call(searchAPI, action.data);
        yield put({
            type: SEARCH_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.log("검색실패")
        yield put({
            type: SEARCH_FAILURE,
            data: err.response.data,
        })
    }
}

function* searchDepartments(action){
    try{
        const result = yield call(searchDepartmentsAPI, action.data);
        yield put({
            type: SEARCH_DEPARTMENTS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.log("검색실패")
        yield put({
            type: SEARCH_DEPARTMENTS_FAILURE,
            data: err.response.data,
        })
    }
}

function* searchInfo(action){
    try{
        const result = yield call(searchInfoAPI, action.data);
        yield put({
            type: INFO_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.log("검색실패")
        yield put({
            type: INFO_FAILURE,
            data: err.response.data,
        })
    }
}

function* registerWallet(action){
    try{
        const result = yield call(registerWalletAPI, action.data);
        yield put({
            type: REGISTER_WALLET_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.log("검색실패")
        yield put({
            type: REGISTER_WALLET_FAILURE,
            data: err.response.data,
        })
    }
}

function* watchSearch() {
    yield takeLatest(SEARCH_REQUEST, search)
}

function* watchSearchDepartments() {
    yield takeLatest(DEPARTMENTS_REQUEST, searchDepartments)
}

function* watchSearchInfo() {
    yield takeLatest(INFO_REQUEST, searchInfo)
}

function* watchRegisterWallet() {
    yield takeLatest(REGISTER_WALLET, registerWallet)
}

export default function* searchSaga(){
    yield all([
        fork(watchSearch),
        fork(watchSearchDepartments),
        fork(watchSearchInfo),
        fork(watchRegisterWallet),
    ])
}