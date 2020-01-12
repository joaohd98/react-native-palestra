import {ServiceResponse, ServiceStatus} from "../../../../services/model";
import {LectureResponseModel, LectureTypeResponseModel} from "../../../../services/lectures/model";
import {LecturesPageModel} from "../model";

export enum LecturesPageActionConst {
  FETCH_LECTURE_AND_TYPE_REQUESTED = "LecturesPage/FETCH_LECTURE_AND_TYPE_REQUESTED",
  FETCH_LECTURE_AND_TYPE_FINISHED = "LecturesPage/FETCH_LECTURE_AND_TYPE_FINISHED",
  FETCH_LECTURES_REQUESTED = "LecturesPage/FETCH_LECTURES_REQUESTED",
  FETCH_LECTURES_FINISHED = "LecturesPage/FETCH_LECTURES_FINISHED",
  FETCH_CATEGORY_TYPE_REQUEST = "LecturesPage/FETCH_CATEGORY_TYPE_REQUEST",
  FETCH_CATEGORY_TYPE_FINISHED = "LecturesPage/FETCH_CATEGORY_TYPE_FINISHED",
  CHANGE_FILTER_LECTURE = "LecturesPage/CHANGE_FILTER_LECTURE",
}

export interface LecturesPageActionType {
  type: LecturesPageActionConst,
  payload: LecturesPageModel.Props
}

export class LecturesPageAction {

  static getLectureTypes = (): LecturesPageActionType => ({
    type: LecturesPageActionConst.FETCH_LECTURE_AND_TYPE_REQUESTED,
    payload: {
      status: ServiceStatus.loading,
    }
  });

  static setLecturesTypes = (result: ServiceResponse<{ lectures: LectureResponseModel[], types: LectureTypeResponseModel[] }>): LecturesPageActionType => ({
    type: LecturesPageActionConst.FETCH_LECTURE_AND_TYPE_FINISHED,
    payload: {
      status: result.status,
      lectures: result.response!.lectures,
      lecturesTypes: result.response!.types,
    }
  });


  static getLectures = (): LecturesPageActionType => ({
    type: LecturesPageActionConst.FETCH_LECTURES_REQUESTED,
    payload: {
      status: ServiceStatus.loading,
    }
  });

  static setLectures = (result: ServiceResponse<LectureResponseModel[]>): LecturesPageActionType => ({
    type: LecturesPageActionConst.FETCH_LECTURES_FINISHED,
    payload: {
      status: result.status,
      lectures: result.response!,
    }
  });

  static getTypes = (): LecturesPageActionType => ({
    type: LecturesPageActionConst.FETCH_CATEGORY_TYPE_REQUEST,
    payload: {
      status: ServiceStatus.loading,
    }
  });

  static setTypes = (result: ServiceResponse<LectureTypeResponseModel[]>): LecturesPageActionType => ({
    type: LecturesPageActionConst.FETCH_CATEGORY_TYPE_FINISHED,
    payload: {
      status: result.status,
      lecturesTypes: result.response!,
    }
  });

}
