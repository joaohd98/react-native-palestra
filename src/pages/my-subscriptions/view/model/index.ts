import {LectureResponseModel, LectureTypeResponseModel} from "../../../../services/lectures/model";
import {ServiceStatus} from "../../../../services/model";
import {SubscribeResponseModel} from "../../../../services/my-subscriptions/model";
import {NavigationStackProp, NavigationStackState} from "react-navigation-stack";

export namespace MySubscriptionsPageModel {

  export interface Props {
    lectures?: LectureResponseModel[],
    subscriptions?: SubscribeResponseModel[],
    types?: LectureTypeResponseModel[],
    status?: ServiceStatus,
    navigation?: NavigationStackProp<NavigationStackState, Props>,
    email?: string
    functions?: {
      getLecturesTypesSubscriptions: () => void,
      sendParamsDetails: (lecture: LectureResponseModel, type: LectureTypeResponseModel, subscription: SubscribeResponseModel) => void,
    }
  }

}

