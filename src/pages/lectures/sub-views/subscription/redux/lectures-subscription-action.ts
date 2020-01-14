import {LectureSubscriptionPageModel} from "../model";
import {LectureResponseModel, LectureTypeResponseModel} from "../../../../../services/lectures/model";

export enum LectureSubscriptionPageActionConst {
  RECEIVE_LECTURE_TYPE = "LecturesSubscriptionPage/RECEIVE_LECTURE_TYPE",
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

}
