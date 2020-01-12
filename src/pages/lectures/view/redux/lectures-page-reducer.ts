import {LecturesPageModel} from "../providers/lectures-page-model";
import {LecturesPageAction, LecturesPageActionConst, LecturesPageActionType} from "./lectures-page-action";
import {ServiceStatus} from "../../../../services/model";
import {LecturePage} from "../index";
import {Routes} from "../../../../routes/routes";

export const LecturesPageInitialState: LecturesPageModel.Props = {
  lectures: [],
  lecturesTypes: null,
  lectureTypeSelected: null,
  status: ServiceStatus.noAction,
  functions: {
    getLectureTypes: () => LecturesPageAction.getLectureTypes(),
    getLectures: () => LecturesPageAction.getLectures(),
    getTypes: () => LecturesPageAction.getTypes(),
  }
};

export const LecturesPageReducer = (state = LecturesPageInitialState, action: LecturesPageActionType): LecturesPageModel.Props => {

  switch (action.type) {

    case LecturesPageActionConst.FETCH_LECTURE_AND_TYPE_REQUESTED: {
      return {
        ...state,
        status: action.payload.status
      }
    }

    case LecturesPageActionConst.FETCH_LECTURE_AND_TYPE_FINISHED: {
      return {
        ...state,
        status: action.payload.status,
        lectures: action.payload.lectures,
        lecturesTypes: action.payload.lecturesTypes
      }
    }

    case LecturesPageActionConst.FETCH_LECTURES_REQUESTED: {
      return {
        ...state,
        status: action.payload.status
      }
    }

    case LecturesPageActionConst.FETCH_LECTURES_FINISHED: {
      return {
        ...state,
        status: action.payload.status,
        lectures: action.payload.lectures,
      }
    }

    case LecturesPageActionConst.FETCH_CATEGORY_TYPE_REQUEST: {
      return {
        ...state,
        status: action.payload.status
      }
    }

    case LecturesPageActionConst.FETCH_CATEGORY_TYPE_FINISHED: {
      return {
        ...state,
        status: action.payload.status,
        lecturesTypes: action.payload.lecturesTypes
      }
    }

    default: return state;

  }
};
