import {
  LectureDetailsPageActionType,
  LectureDetailsPageActionConst
} from "./lecture-details-action";
import {LectureDetailsPageModel} from "../model";

export const LectureDetailsPageInitialState: LectureDetailsPageModel.Props = {
  functions: {
    subscribeLecture: () => {},
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
      }

    }

    default: return state;

  }
};
