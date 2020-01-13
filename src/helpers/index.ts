import {Dimensions} from "react-native";
import {ServiceResponse, ServiceStatus} from "../services/model";

export class Helpers {

  static takePercentScreen(percent: number, type: "width" | "height") {

    const size = type == "width" ? Dimensions.get("screen").width : Dimensions.get("screen").height;

    return size * (percent / 100);

  }

  static checkStatusMultipleResponse(responses: ServiceResponse<any>[]): ServiceStatus {

    let status = ServiceStatus.success;

    for(let response of responses) {

      if(response.status === ServiceStatus.noInternetConnection) {
        status = ServiceStatus.noInternetConnection;
        break
      }

      else if(response.status === ServiceStatus.exception) {
        status = ServiceStatus.exception;
        break
      }

    }

    return status;

  }

  static isEqual(obj1: any, obj2: any): boolean{
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }

}
