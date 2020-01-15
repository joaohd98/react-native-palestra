import {LectureResponseModel, LectureTypeResponseModel} from "../../../../../services/lectures/model";
import {NavigationScreenProp, NavigationState} from "react-navigation";
import {SubscribeResponseModel} from "../../../../../services/my-subscriptions/model";

export namespace LectureDetailsPageModel {

  export interface Props {
    lecture?: LectureResponseModel,
    type?: LectureTypeResponseModel,
    subscription?: SubscribeResponseModel,
    navigation?: NavigationScreenProp<NavigationState, Props>,
    hasSubscribe?: boolean,
    functions?: {
      sendParamsSubscription: (lecture: LectureResponseModel, type: LectureTypeResponseModel) => void,
    }
  }

}
