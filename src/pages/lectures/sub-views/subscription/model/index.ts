import {
  LectureResponseModel,
  LectureSubscribeRequestModel, LectureSubscribeResponseModel,
  LectureTypeResponseModel
} from "../../../../../services/lectures/model";
import {ServiceStatus} from "../../../../../services/model";
import {NavigationScreenProp, NavigationState} from "react-navigation";

export namespace LectureSubscriptionPageModel {

  export interface Props {
    lecture?: LectureResponseModel,
    type?: LectureTypeResponseModel,
    status?: ServiceStatus,
    response?: LectureSubscribeResponseModel,
    navigation?: NavigationScreenProp<NavigationState, Props>
    email?: string,
    functions?: {
      subscribeLecture: (subscribe: LectureSubscribeRequestModel) => void,
    }
  }

  export interface State {
    name: {value: string, valid: boolean},
    email: {value: string, valid: boolean},
    company: {value: string, valid: boolean},
    role: {value: string, valid: boolean},
  }

}
