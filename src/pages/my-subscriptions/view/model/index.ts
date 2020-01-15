import {LectureResponseModel, LectureTypeResponseModel} from "../../../../services/lectures/model";
import {ServiceStatus} from "../../../../services/model";
import {SubscribeResponseModel} from "../../../../services/my-subscriptions/model";
import {NavigationScreenProp, NavigationState} from "react-navigation";

export namespace MySubscriptionsPageModel {

  export interface Props {
    lectures?: LectureResponseModel[],
    subscriptions?: SubscribeResponseModel[],
    types?: LectureTypeResponseModel[],
    status?: ServiceStatus,
    navigation?: NavigationScreenProp<NavigationState, Props>
    functions?: {
      getLecturesTypesSubscriptions: () => void,
      sendParamsDetails: (lecture: LectureResponseModel, type: LectureTypeResponseModel, subscription: SubscribeResponseModel) => void,
    }
  }

}

