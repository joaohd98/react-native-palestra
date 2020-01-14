import {ServiceResponse, ServiceStatus} from "../../../../services/model";
import {LectureResponseModel, LectureTypeResponseModel} from "../../../../services/lectures/model";
import {LecturesPageModel} from "../model";
import {SubscribeResponseModel} from "../../../../services/my-subscriptions/model";

export enum LecturesPageActionConst {
  FETCH_LECTURES_SUBSCRIBES_TYPES_REQUESTED = "LecturesPage/FETCH_LECTURES_SUBSCRIBES_TYPES_REQUESTED",
  FETCH_LECTURES_SUBSCRIBES_TYPES_FINISHED = "LecturesPage/FETCH_LECTURES_SUBSCRIBES_TYPES_FINISHED",
  CHANGE_FILTER_LECTURE = "LecturesPage/CHANGE_FILTER_LECTURE",
}

export interface LecturesPageActionType {
  type: LecturesPageActionConst,
  payload: LecturesPageModel.Props
}

export class LecturesPageAction {

  static getLectureSubscriptionsTypes = (): LecturesPageActionType => ({
    type: LecturesPageActionConst.FETCH_LECTURES_SUBSCRIBES_TYPES_REQUESTED,
    payload: {
      status: ServiceStatus.loading,
    }
  });

  static setLectureSubscriptionsTypes = (result: ServiceResponse<{lectures: LectureResponseModel[], types: LectureTypeResponseModel[], subscriptions: SubscribeResponseModel[]}>): LecturesPageActionType => ({
    type: LecturesPageActionConst.FETCH_LECTURES_SUBSCRIBES_TYPES_FINISHED,
    payload: {
      status: result.status,
      lectures: result.response!.lectures,
      types: result.response!.types,
      subscriptions: result.response!.subscriptions
    }
  });

  static changeLectureFilter = (type: LectureTypeResponseModel | null): LecturesPageActionType => ({
    type: LecturesPageActionConst.CHANGE_FILTER_LECTURE,
    payload: {
      typeSelected: type
    }
  })

}
