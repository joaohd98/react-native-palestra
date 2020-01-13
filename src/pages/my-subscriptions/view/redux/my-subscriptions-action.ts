import {MySubscriptionsPageModel} from "../model";
import {ServiceResponse, ServiceStatus} from "../../../../services/model";
import {SubscribeResponseModel} from "../../../../services/my-subscriptions/model";
import {LectureResponseModel, LectureTypeResponseModel} from "../../../../services/lectures/model";

export enum MySubscriptionsActionConst {
  FETCH_LECTURES_TYPES_SUBSCRIPTIONS_REQUEST = "MySubscriptionsPage/FETCH_SUBSCRIPTION_REQUEST",
  FETCH_LECTURES_TYPES_SUBSCRIPTIONS_FINISHED = "MySubscriptionsPage/FETCH_SUBSCRIPTION_FINISHED",
}

export interface MySubscriptionsActionType {
  type: MySubscriptionsActionConst,
  payload: MySubscriptionsPageModel.Props
}

export class MySubscriptionsAction {

  static getLecturesTypesSubscriptions = (): MySubscriptionsActionType => ({
    type: MySubscriptionsActionConst.FETCH_LECTURES_TYPES_SUBSCRIPTIONS_REQUEST,
    payload: {
      status: ServiceStatus.loading,
    }
  });

  static setLecturesTypesSubscriptions = (result: ServiceResponse<{lectures: LectureResponseModel[], types: LectureTypeResponseModel[], subscriptions: SubscribeResponseModel[]}>): MySubscriptionsActionType => ({
    type: MySubscriptionsActionConst.FETCH_LECTURES_TYPES_SUBSCRIPTIONS_FINISHED,
    payload: {
      status: result.status,
      lectures: result.response?.lectures,
      types: result.response?.types,
      subscriptions: result.response?.subscriptions,
    }
  });

}
