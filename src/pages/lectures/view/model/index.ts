import {LectureResponseModel, LectureTypeResponseModel} from "../../../../services/lectures/model";
import {ServiceStatus} from "../../../../services/model";
import {SubscribeResponseModel} from "../../../../services/my-subscriptions/model";

export namespace LecturesPageModel {

  export interface Props {
    lectures?: LectureResponseModel[],
    types?: LectureTypeResponseModel[],
    subscriptions?: SubscribeResponseModel[],
    typeSelected?: LectureTypeResponseModel | null,
    status?: ServiceStatus,
    functions?: {
      getLectureSubscriptionsTypes: () => void,
    }
  }

}
