import {LecturesPageModel} from "../providers/lectures-page-model";

export enum LecturePageActionConst {
  FETCH_LECTURES_REQUESTED,
  FETCH_LECTURES_FINISHED,
  FETCH_CATEGORY_TYPE_REQUEST,
  FETCH_CATEGORY_TYPE_FINISHED,
  CHANGE_FILTER_LECTURE,
}

export interface LecturePageActionType {
  cod: string,
  type: LecturePageActionConst,
  payload: LecturesPageModel.Props
}

export class GamesPageAction {

  /*
  static increaseGameListFinished = (result: ServiceResponse<GamesServiceResponseModel>) => ({
    type: GamesPageActionConst.GAMES_INCREASE_FETCH_FINISHED,
    payload: {
      status: result.status,
      games: result.response,
    }
  });
   */

}
