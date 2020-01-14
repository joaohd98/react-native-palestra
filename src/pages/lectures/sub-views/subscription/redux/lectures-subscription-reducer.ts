import {ServiceStatus} from "../../../../../services/model";
import {LectureSubscriptionPageActionType} from "./lectures-subscription-action";
import {LectureSubscriptionPageModel} from "../model";

export const LectureSubscriptionPageInitialState: LectureSubscriptionPageModel.Props = {
  status: ServiceStatus.noAction,
  functions: {
    subscribeLecture: () => {},
  }
};

export const LectureSubscriptionPageReducer = (state = LectureSubscriptionPageInitialState, action: LectureSubscriptionPageActionType): LectureSubscriptionPageModel.Props => {

  switch (action.type) {

    default: return state;

  }
};
