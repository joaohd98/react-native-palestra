import {ServiceStatus} from "../../../../../services/model";
import {LectureSubscriptionPageActionConst, LectureSubscriptionPageActionType} from "./lectures-subscription-action";
import {LectureSubscriptionPageModel} from "../model";

export const LectureSubscriptionPageInitialState: LectureSubscriptionPageModel.Props = {
  status: ServiceStatus.noAction,
  functions: {
    subscribeLecture: () => {},
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
    
    default: return state;

  }
};
