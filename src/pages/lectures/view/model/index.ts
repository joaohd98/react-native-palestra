import {LectureResponseModel, LectureTypeResponseModel} from "../../../../services/lectures/model";
import {ServiceStatus} from "../../../../services/model";

export namespace LecturesPageModel {

  export interface Props {
    lectures?: LectureResponseModel[],
    lecturesTypes?: LectureTypeResponseModel[] | null,
    status?: ServiceStatus,
    lectureTypeSelected?: LectureTypeResponseModel | null
    functions?: {
      getLectureTypes: () => void,
      getLectures: () => void,
      getTypes: () => void,
    }
  }

}
