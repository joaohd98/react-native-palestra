import {MySubscriptionsPageModel} from "../model";
import {MySubscriptionsAction, MySubscriptionsActionConst, MySubscriptionsActionType} from "./my-subscriptions-action";
import {LectureDetailsPageAction} from "../../../lectures/sub-views/details/redux/lecture-details-action";

export const MySubscriptionsInitialState: MySubscriptionsPageModel.Props = {
  lectures: [],
  subscriptions: [],
  functions: {
    getLecturesTypesSubscriptions: () => MySubscriptionsAction.getLecturesTypesSubscriptions(),
    sendParamsDetails: (lecture, type, subscription) =>
      LectureDetailsPageAction.setLectureSubscriptionsTypes(lecture, type, subscription),
  }
};

export const MySubscriptionsPageReducer = (state = MySubscriptionsInitialState, action: MySubscriptionsActionType): MySubscriptionsPageModel.Props => {

  switch (action.type) {

    case MySubscriptionsActionConst.FETCH_LECTURES_TYPES_SUBSCRIPTIONS_REQUEST: {
      return {
        ...state,
        status: action.payload.status
      }
    }

    case MySubscriptionsActionConst.FETCH_LECTURES_TYPES_SUBSCRIPTIONS_FINISHED: {
      return {
        ...state,
        status: action.payload.status,
        lectures: action.payload.lectures,
        types: action.payload.types,
        subscriptions: action.payload.subscriptions,
      }
    }

    default: return state;

  }
};
