import {SideMenuModel} from "../model";
import {LectureTypeResponseModel} from "../../../services/lectures/model";

export enum SideMenuActionConst {
  SET_TYPES = "SideMenu/SET_TYPES",
}

export interface SideMenuActionType {
  type: SideMenuActionConst,
  payload: SideMenuModel.Props
}

export class SideMenuAction {

  static setType = (lectureTypes: LectureTypeResponseModel[]): SideMenuActionType => ({
    type: SideMenuActionConst.SET_TYPES,
    payload: {
      lectureTypes
    }
  });
}
