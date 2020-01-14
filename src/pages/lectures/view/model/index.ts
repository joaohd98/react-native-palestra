import {LectureResponseModel, LectureTypeResponseModel} from "../../../../services/lectures/model";
import {ServiceStatus} from "../../../../services/model";
import {SubscribeResponseModel} from "../../../../services/my-subscriptions/model";
import {NavigationScreenProp, NavigationState} from "react-navigation";
import {LecturesPageAction} from "../redux/lectures-page-action";

export namespace LecturesPageModel {

  export interface Props {
    lectures?: LectureResponseModel[],
    types?: LectureTypeResponseModel[],
    subscriptions?: SubscribeResponseModel[],
    typeSelected?: LectureTypeResponseModel | null,
    navigation?: NavigationScreenProp<NavigationState, Props>
    status?: ServiceStatus,
    functions?: {
      getLectureSubscriptionsTypes: () => void,
      sendParamsDetails: (lecture: LectureResponseModel, type: LectureTypeResponseModel, subscription: SubscribeResponseModel) => void,
    }
  }

}
