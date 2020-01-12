import {LectureTypeResponseModel} from "../../../services/lectures/model";

export namespace SideMenuModel {

  export interface Props {
    lectureTypes?: LectureTypeResponseModel[],
    functions?: {
      changeLectureFilter: (type: LectureTypeResponseModel | null) => void,
    }
  }

}
