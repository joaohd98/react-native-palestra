import {ServiceStatus} from "../../../../../services/model";
import {LectureDetailsPageActionType} from "./lecture-details-action";
import {LectureDetailsPageModel} from "../model";

export const LectureDetailsPageInitialState: LectureDetailsPageModel.Props = {
  status: ServiceStatus.noAction,
  functions: {
    subscribeLecture: () => {},
  }
};

export const LectureDetailsPageReducer = (state = LectureDetailsPageInitialState, action: LectureDetailsPageActionType): LectureDetailsPageModel.Props => {

  switch (action.type) {

    default: return state;

  }
};
