import {LectureSubscriptionPageModel} from "../model";
import {
  LectureResponseModel,
  LectureSubscribeRequestModel, LectureSubscribeResponseModel,
  LectureTypeResponseModel
} from "../../../../../services/lectures/model";
import {ServiceResponse, ServiceStatus} from "../../../../../services/model";

export enum LectureSubscriptionPageActionConst {
  RECEIVE_LECTURE_TYPE = "LecturesSubscriptionPage/RECEIVE_LECTURE_TYPE",
  SUBSCRIBE_FETCH_REQUESTED = "LecturesSubscriptionPage/SUBSCRIBE_LECTURE_FETCH_REQUESTED",
  SUBSCRIBE_FETCH_FINISHED = "LecturesSubscriptionPage/SUBSCRIBE_LECTURE_FETCH_FINISHED",
  SAVE_EMAIL = "LecturesSubscriptionPage/SAVE_EMAIL"
}

export interface LectureSubscriptionPageActionType {
  type: LectureSubscriptionPageActionConst,
  payload: LectureSubscriptionPageModel.Props
}

export class LectureSubscriptionPageAction {

  static setLectureSubscriptionsTypes = (lecture: LectureResponseModel, type: LectureTypeResponseModel): LectureSubscriptionPageActionType => ({
    type: LectureSubscriptionPageActionConst.RECEIVE_LECTURE_TYPE,
    payload: {
      lecture,
      type,
    }
  });

  static subscribeFetchRequest = (subscribe: LectureSubscribeRequestModel) => ({
    type: LectureSubscriptionPageActionConst.SUBSCRIBE_FETCH_REQUESTED,
    payload: {
      subscribe,
      status: ServiceStatus.loading,
    }
  });

  static subscribeFetchFinish = (service: ServiceResponse<LectureSubscribeResponseModel>): LectureSubscriptionPageActionType => ({
    type: LectureSubscriptionPageActionConst.SUBSCRIBE_FETCH_FINISHED,
    payload: {
      status: service.status,
      response: service.response,
    }
  });

  static saveEmail = (email: string): LectureSubscriptionPageActionType => ({
    type: LectureSubscriptionPageActionConst.SAVE_EMAIL,
    payload: {
      email
    }
  });

}
