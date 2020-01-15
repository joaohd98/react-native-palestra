import {LectureDetailsPageModel} from "../model";
import {LectureResponseModel, LectureTypeResponseModel} from "../../../../../services/lectures/model";
import {SubscribeResponseModel} from "../../../../../services/my-subscriptions/model";

export enum LectureDetailsPageActionConst {
  RECEIVE_LECTURE_SUBSCRIBE_TYPE = "LecturesDetailsPage/RECEIVE_LECTURE_SUBSCRIBE_TYPE",
  CHANGED_HAS_SUBSCRIBED = "LecturesDetailsPage/CHANGED_HAS_SUBSCRIBED"
}

export interface LectureDetailsPageActionType {
  type: LectureDetailsPageActionConst,
  payload: LectureDetailsPageModel.Props
}

export class LectureDetailsPageAction {

  static setLectureSubscriptionsTypes = (lecture: LectureResponseModel, type: LectureTypeResponseModel, subscription: SubscribeResponseModel): LectureDetailsPageActionType => ({
    type: LectureDetailsPageActionConst.RECEIVE_LECTURE_SUBSCRIBE_TYPE,
    payload: {
      lecture,
      type,
      subscription,
      hasSubscribe: false
    }
  });


  static changeHasSubscribe = (): LectureDetailsPageActionType => ({
    type: LectureDetailsPageActionConst.CHANGED_HAS_SUBSCRIBED,
    payload: {
      hasSubscribe: true,
    }
  });

}
