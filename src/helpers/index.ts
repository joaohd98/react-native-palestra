import {Dimensions} from "react-native";

export class Helpers {

  static takePercentScreen(percent: number, type: "width" | "height") {

    const size = type == "width" ? Dimensions.get("screen").width : Dimensions.get("screen").height;

    return size * (percent / 100);

  }

}
