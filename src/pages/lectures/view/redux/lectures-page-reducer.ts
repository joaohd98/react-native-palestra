import {LecturesPageAction, LecturesPageActionConst, LecturesPageActionType} from "./lectures-page-action";
import {ServiceStatus} from "../../../../services/model";
import {LecturesPageModel} from "../model";
import {LectureDetailsPage} from "../../sub-views/details";
import {LectureDetailsPageAction} from "../../sub-views/details/redux/lecture-details-action";

export const LecturesPageInitialState: LecturesPageModel.Props = {
  lectures: [],
  types: [],
  subscriptions: [],
  typeSelected: null,
  status: ServiceStatus.noAction,
  functions: {
    getLectureSubscriptionsTypes: () => LecturesPageAction.getLectureSubscriptionsTypes(),
    sendParamsDetails: (lecture, type, subscription) =>
      LectureDetailsPageAction.setLectureSubscriptionsTypes(lecture, type, subscription),
  }
};

export const LecturesPageReducer = (state = LecturesPageInitialState, action: LecturesPageActionType): LecturesPageModel.Props => {

  switch (action.type) {

    case LecturesPageActionConst.FETCH_LECTURES_SUBSCRIBES_TYPES_REQUESTED: {
      return {
        ...state,
        status: action.payload.status
      }
    }

    case LecturesPageActionConst.FETCH_LECTURES_SUBSCRIBES_TYPES_FINISHED: {
      return {
        ...state,
        status: action.payload.status,
        lectures: action.payload.lectures,
        types: action.payload.types,
        subscriptions: action.payload.subscriptions,
      }
    }

    case LecturesPageActionConst.CHANGE_FILTER_LECTURE: {
      return {
        ...state,
        typeSelected: action.payload.typeSelected
      }
    }

    default: return state;

  }
};
