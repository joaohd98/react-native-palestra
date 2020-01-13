import {Service} from "../service";
import {ServiceResponse} from "../model";
import {LectureResponseModel} from "../lectures/model";
import {serviceURL} from "../url";

export class SubscriptionService extends Service {

  static getSubscriptions = (): Promise<ServiceResponse<Service[]>> => {

    return SubscriptionService.makeGetRequest<LectureResponseModel[]>(
      SubscriptionService.getUrl(serviceURL.getMySubscriptions),
      null
    );
  }

}
