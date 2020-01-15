import {call, put, takeEvery, all} from 'redux-saga/effects'
import {LecturesPageAction, LecturesPageActionConst} from "./lectures-page-action";
import {LecturesService} from "../../../../services/lectures/service";
import {ServiceResponse} from "../../../../services/model";
import {LectureResponseModel, LectureTypeResponseModel} from "../../../../services/lectures/model";
import {SideMenuAction} from "../../../../layout/side-menu/redux/side-menu-action";
import {Helpers} from "../../../../helpers";
import {SubscriptionService} from "../../../../services/my-subscriptions/service";
import {SubscribeResponseModel} from "../../../../services/my-subscriptions/model";

function *getLecturesAndTypes() {

  const [lectures, types, subscriptions] = yield all([
    call(() => LecturesService.getLectures()),
    call( () => LecturesService.getTypes()),
    call( () => SubscriptionService.getSubscriptions())
  ]);

  const result: ServiceResponse<{ lectures: LectureResponseModel[], types: LectureTypeResponseModel[], subscriptions: SubscribeResponseModel[] }> = {
    status: Helpers.checkStatusMultipleResponse([lectures, types, subscriptions]),
    response: {lectures: lectures.response!, types: types.response!, subscriptions: subscriptions.response!}
  };

  yield all([
    put(SideMenuAction.setType(types)),
    put(LecturesPageAction.setLectureSubscriptionsTypes(result))
  ]);

}

export const lecturesListSaga = [
  takeEvery(LecturesPageActionConst.FETCH_LECTURES_SUBSCRIBES_TYPES_REQUESTED, getLecturesAndTypes),
];
