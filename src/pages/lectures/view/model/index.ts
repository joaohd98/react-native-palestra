import {LectureResponseModel, LectureTypeResponseModel} from "../../../../services/lectures/model";
import {ServiceStatus} from "../../../../services/model";
import {SubscribeResponseModel} from "../../../../services/my-subscriptions/model";
import {NavigationScreenProp, NavigationState} from "react-navigation";
import {LecturesPageAction} from "../redux/lectures-page-action";
import {NavigationStackProp, NavigationStackState} from "react-navigation-stack";
import {MySubscriptionsPageModel} from "../../../my-subscriptions/view/model";

export namespace LecturesPageModel {

  export interface Props {
    lectures?: LectureResponseModel[],
    types?: LectureTypeResponseModel[],
    subscriptions?: SubscribeResponseModel[],
    typeSelected?: LectureTypeResponseModel | null,
    navigation?: NavigationStackProp<NavigationStackState, MySubscriptionsPageModel.Props>
    status?: ServiceStatus,
    email?: string
    functions?: {
      getLectureSubscriptionsTypes: () => void,
      sendParamsDetails: (lecture: LectureResponseModel, type: LectureTypeResponseModel, subscription: SubscribeResponseModel) => void,
    }
  }

  export interface State {
    focusListener: any;
  }

}
