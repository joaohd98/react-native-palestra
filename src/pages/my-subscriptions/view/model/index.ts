import {LectureResponseModel, LectureTypeResponseModel} from "../../../../services/lectures/model";
import {ServiceStatus} from "../../../../services/model";
import {SubscribeResponseModel} from "../../../../services/my-subscriptions/model";

export namespace MySubscriptionsPageModel {

  export interface Props {
    lectures?: LectureResponseModel[],
    subscriptions?: SubscribeResponseModel[],
    types?: LectureTypeResponseModel[],
    status?: ServiceStatus,
    functions?: {
      getLecturesTypesSubscriptions: () => void,
    }
  }

}

