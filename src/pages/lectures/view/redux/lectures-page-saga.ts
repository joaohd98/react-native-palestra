import {call, put, takeEvery, all} from 'redux-saga/effects'
import {LecturesPageAction, LecturesPageActionConst} from "./lectures-page-action";
import {LecturesService} from "../../../../services/lectures/service";
import {ServiceResponse, ServiceStatus} from "../../../../services/model";
import {LectureResponseModel, LectureTypeResponseModel} from "../../../../services/lectures/model";
import {SideMenuAction} from "../../../../layout/side-menu/redux/side-menu-action";

function *getLecturesAndTypes() {

  const [lectures, types] = yield all([
    call(() => LecturesService.getLectures()),
    call( () => LecturesService.getTypes())
  ]);

  const result: ServiceResponse<{ lectures: LectureResponseModel[], types: LectureTypeResponseModel[] }> = {
    status: lectures.status == types.status && lectures.status == ServiceStatus.success ? ServiceStatus.success : ServiceStatus.exception,
    response: {lectures: lectures.response!, types: types.response!}
  };

  if(types.response)
    yield put(SideMenuAction.setType(types.response));

  yield put(LecturesPageAction.setLecturesTypes(result));

}

function *getLectures() {

  const result = yield call(() => LecturesService.getLectures());

  yield put(LecturesPageAction.setLectures(result));

}

function *getTypes() {

  const result = yield call(() => LecturesService.getLectures());

  yield put(LecturesPageAction.setTypes(result));

}

export const lecturesListSaga = [
  takeEvery(LecturesPageActionConst.FETCH_LECTURE_AND_TYPE_REQUESTED, getLecturesAndTypes),
  takeEvery(LecturesPageActionConst.FETCH_LECTURES_REQUESTED, getLectures),
  takeEvery(LecturesPageActionConst.FETCH_CATEGORY_TYPE_REQUEST, getTypes),
];
