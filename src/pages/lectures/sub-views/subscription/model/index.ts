import {LectureResponseModel, LectureTypeResponseModel} from "../../../../../services/lectures/model";
import {ServiceStatus} from "../../../../../services/model";

export namespace LectureSubscriptionPageModel {

  export interface Props {
    lecture?: LectureResponseModel,
    type?: LectureTypeResponseModel,
    status?: ServiceStatus,
    functions?: {
      subscribeLecture: () => void,
    }
  }

}
