import Config from 'react-native-config';
import {Service} from "../service";
import {ServiceResponse} from "../model";
import {
  LectureResponseModel,
  LectureSubscribeRequestModel,
  LectureSubscribeResponseModel,
  LectureTypeResponseModel
} from "./model";
import {serviceURL} from "../url";

export class LecturesService extends Service {

  static getLectures = (): Promise<ServiceResponse<LectureResponseModel[]>> => {

    return LecturesService.makeGetRequest<LectureResponseModel[]>(
      LecturesService.getUrl(serviceURL.getLecture),
      null
    );

  };

  static getTypes = (): Promise<ServiceResponse<LectureTypeResponseModel[]>> => {

    return LecturesService.makeGetRequest<LectureResponseModel[]>(
      LecturesService.getUrl(serviceURL.getTypes),
      null
    );

  };

  static lectureSubscribe = (request: LectureSubscribeRequestModel): Promise<ServiceResponse<LectureSubscribeResponseModel>> => {

    return LecturesService.makeGetRequest<LectureSubscribeResponseModel, LectureSubscribeRequestModel>(
      LecturesService.getUrl(serviceURL.lectureSubscribe),
      request
    );

  };

}
