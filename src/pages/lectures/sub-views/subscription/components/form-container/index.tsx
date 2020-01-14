import React, {Component} from "react";
import {LectureSubscriptionPageFormContainerStyles} from "./styles";
import {LectureSubscriptionPageInputName} from "../input-name";
import {ContainerScroll} from "../../../../../../theme/components";
import {LectureSubscriptionPageInputEmail} from "../input-email";
import {LectureSubscriptionPageInputCompany} from "../input-company";
import {LectureSubscriptionPageInputRole} from "../input-role";

export class LectureSubscriptionPageFormContainer extends Component {

  render = () => {

    const { View } = LectureSubscriptionPageFormContainerStyles;

    return (
      <View>
        <LectureSubscriptionPageInputName/>
        <LectureSubscriptionPageInputEmail/>
        <LectureSubscriptionPageInputCompany/>
        <LectureSubscriptionPageInputRole/>
      </View>
    )

  }

}
