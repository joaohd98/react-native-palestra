import {LectureResponseModel, LectureTypeResponseModel} from "../../../../../services/lectures/model";
import {ServiceStatus} from "../../../../../services/model";

export namespace LectureDetailsPageModel {

  export interface Props {
    lecture?: LectureResponseModel,
    types?: LectureTypeResponseModel,
    status?: ServiceStatus,
    functions?: {
      subscribeLecture: () => void,
    }
  }

}
