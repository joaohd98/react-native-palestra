import {SideMenuModel} from "../model";
import {SideMenuActionConst, SideMenuActionType} from "./side-menu-action";
import {LecturesPageAction} from "../../../pages/lectures/view/redux/lectures-page-action";
import {LectureTypeResponseModel} from "../../../services/lectures/model";

export const SideMenuInitialState: SideMenuModel.Props = {
  lectureTypes: [],
  functions: {
    changeLectureFilter: (type: LectureTypeResponseModel) => LecturesPageAction.changeLectureFilter(type),
  }
};

export const SideMenuReducer = (state = SideMenuInitialState, action: SideMenuActionType): SideMenuModel.Props => {

  switch (action.type) {

    case SideMenuActionConst.SET_TYPES: {
      return {
        ...state,
        lectureTypes: action.payload.lectureTypes
      }
    }

    default: return state;

  }
};
