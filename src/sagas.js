import { call, put, takeEvery } from "redux-saga/effects";
import { GET_DATA_FETCH, GET_DATA_SUCCESS } from "./action";

function dataFetch() {
  return fetch("https://admin.naxa.com.np/api/services").then((response) =>
    response.json()
  );
}

function* workGetDataFetch() {
  const data = yield call(dataFetch);
  yield put({ type: GET_DATA_SUCCESS, data });
}

function* sagas() {
  yield takeEvery(GET_DATA_FETCH, workGetDataFetch);
}

export default sagas;
