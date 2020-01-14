import {LecturesPageAction, LecturesPageActionConst, LecturesPageActionType} from "./lectures-page-action";
import {ServiceStatus} from "../../../../services/model";
import {LecturesPageModel} from "../model";

export const LecturesPageInitialState: LecturesPageModel.Props = {
  lectures: [],
  types: [],
  subscriptions: [],
  typeSelected: null,
  status: ServiceStatus.noAction,
  functions: {
    getLectureSubscriptionsTypes: () => LecturesPageAction.getLectureSubscriptionsTypes(),
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
