import {LectureResponseModel, LectureTypeResponseModel} from "../../../../../services/lectures/model";
import {ServiceStatus} from "../../../../../services/model";

export namespace LectureSubscriptionPageModel {

  export interface Props {
    lecture?: LectureResponseModel,
    type?: LectureTypeResponseModel,
    status?: ServiceStatus,
    mail?: string,
    functions?: {
      subscribeLecture: () => void,
    }
  }

  export interface State {
    name: {value: string, valid: boolean},
    mail: {value: string, valid: boolean},
    company: {value: string, valid: boolean},
    role: {value: string, valid: boolean},
  }

}
