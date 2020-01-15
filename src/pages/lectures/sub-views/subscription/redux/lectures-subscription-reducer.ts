import {ServiceStatus} from "../../../../../services/model";
import {
  LectureSubscriptionPageAction,
  LectureSubscriptionPageActionConst,
  LectureSubscriptionPageActionType
} from "./lectures-subscription-action";
import {LectureSubscriptionPageModel} from "../model";
import {LectureDetailsPageAction} from "../../details/redux/lecture-details-action";

export const LectureSubscriptionPageInitialState: LectureSubscriptionPageModel.Props = {
  status: ServiceStatus.noAction,
  functions: {
    subscribeLecture: (subscribe) => LectureSubscriptionPageAction.subscribeFetchRequest(subscribe),
    openAlertDetails: () => LectureDetailsPageAction.changeHasSubscribe()
  }
};

export const LectureSubscriptionPageReducer = (state = LectureSubscriptionPageInitialState, action: LectureSubscriptionPageActionType): LectureSubscriptionPageModel.Props => {

  switch (action.type) {

    case LectureSubscriptionPageActionConst.RECEIVE_LECTURE_TYPE: {

      return {
        ...state,
        lecture: action.payload.lecture,
        type: action.payload.type,
      }

    }

    case LectureSubscriptionPageActionConst.SUBSCRIBE_FETCH_REQUESTED: {

      return {
        ...state,
        status: action.payload.status,
      }

    }

    case LectureSubscriptionPageActionConst.SUBSCRIBE_FETCH_FINISHED: {

      return {
        ...state,
        status: action.payload.status,
        response: action.payload.response
      }

    }

    default: return state;

  }
};
