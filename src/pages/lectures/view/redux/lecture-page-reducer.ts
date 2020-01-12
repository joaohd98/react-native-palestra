import {LecturesPageModel} from "../providers/lectures-page-model";
import {LecturePageActionType} from "./lecture-page-action";


export const LecturesPageInitialState: LecturesPageModel.Props = {
  functions: {

  }
};

export const LecturesPageReducer = (state = LecturesPageInitialState, action: LecturePageActionType): LecturesPageModel.Props => {

  switch (action.type) {

    default: return state;

  }
};
