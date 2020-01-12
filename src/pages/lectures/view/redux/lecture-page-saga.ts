import { put, takeEvery, takeLatest, call } from 'redux-saga/effects'
import {LecturePageActionConst, LecturePageActionType} from "./lecture-page-action";

function *getLectures(action: LecturePageActionType) {

  //const result = yield call(() => GameService.getGames(action.payload.filters!));

  //yield put(GamesPageAction.getGamesFinished(result));

}


function *getCategoryType(action: LecturePageActionType) {

  //const result = yield call(() => GameService.getGames(action.payload.filters!));

  //yield put(GamesPageAction.getGamesFinished(result));

}

export const gameListSaga = [
  takeEvery(LecturePageActionConst.FETCH_CATEGORY_TYPE_REQUEST, getLectures),
  takeLatest(LecturePageActionConst.FETCH_LECTURES_REQUESTED, getCategoryType),
];
