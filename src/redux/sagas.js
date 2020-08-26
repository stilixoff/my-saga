import {
    put,
    all,
    select,
    take,
    call,
    takeLatest
} from 'redux-saga/effects'


const delay = ms => new Promise(res => setTimeout(res, ms))

export function* helloSaga() {
    yield console.log('Hello SAGA!')
}

export function* incrementAsync({
    payload
}) {
    yield call(delay, payload)
    yield put({
        type: 'INCREMENT'
    })
}

export function* watchIncrementAsync() {
    yield takeLatest('INCREMENT_ASYNC', incrementAsync)
}

function* watchAndLog() {
    while (true) {
        const action = yield take()
        const state = yield select()

        console.log('action:', action)
        console.log('state after:', state)
    }
}

function* watchFirstThreeTodosCreation() {
    for (let i = 0; i < 3; i++) {
        yield take('INCREMENT')
    }
    console.log('3 times')
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync(),
        watchFirstThreeTodosCreation(),
        watchAndLog(),
    ])
}