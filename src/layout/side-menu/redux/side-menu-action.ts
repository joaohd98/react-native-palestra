import {SideMenuModel} from "../model";
import {LectureTypeResponseModel} from "../../../services/lectures/model";
import {ServiceResponse} from "../../../services/model";

export enum SideMenuActionConst {
  SET_TYPES = "SideMenu/SET_TYPES",
}

export interface SideMenuActionType {
  type: SideMenuActionConst,
  payload: SideMenuModel.Props
}

export class SideMenuAction {

  static setType = (lectureTypes: ServiceResponse<LectureTypeResponseModel[]>): SideMenuActionType => ({
    type: SideMenuActionConst.SET_TYPES,
    payload: {
      lectureTypes: lectureTypes.response,
    }
  });
}
