import {
  LectureDetailsPageActionType,
  LectureDetailsPageActionConst
} from "./lecture-details-action";
import {LectureDetailsPageModel} from "../model";
import {LectureResponseModel, LectureTypeResponseModel} from "../../../../../services/lectures/model";
import {LectureSubscriptionPageAction} from "../../subscription/redux/lectures-subscription-action";

export const LectureDetailsPageInitialState: LectureDetailsPageModel.Props = {
  hasSubscribe: false,
  functions: {
    sendParamsSubscription: (lecture: LectureResponseModel, type: LectureTypeResponseModel) =>
      LectureSubscriptionPageAction.setLectureSubscriptionsTypes(lecture, type),
  }
};

export const LectureDetailsPageReducer = (state = LectureDetailsPageInitialState, action: LectureDetailsPageActionType): LectureDetailsPageModel.Props => {

  switch (action.type) {

    case LectureDetailsPageActionConst.RECEIVE_LECTURE_SUBSCRIBE_TYPE: {

      return {
        ...state,
        lecture: action.payload.lecture,
        type: action.payload.type,
        subscription: action.payload.subscription,
        hasSubscribe: action.payload.hasSubscribe
      }

    }

    case LectureDetailsPageActionConst.CHANGED_HAS_SUBSCRIBED: {

      return {
        ...state,
        hasSubscribe: action.payload.hasSubscribe
      }

    }

    default: return state;

  }
};
