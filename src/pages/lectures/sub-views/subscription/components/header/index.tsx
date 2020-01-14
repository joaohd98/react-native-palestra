import React from "react";
import {NavigationScreenProp, NavigationState} from "react-navigation";
import {LectureSubscriptionPageModel} from "../../model";
import {LectureSubscriptionPageHeaderConst} from "./constants";
import {HeaderBarsIconComponent} from "../../../../../../components/header-bars-icon";

export const LectureSubscriptionPageHeader = (screenProp: { navigation: NavigationScreenProp<NavigationState, LectureSubscriptionPageModel.Props> }) => {

  const {
    title,
  } = LectureSubscriptionPageHeaderConst;

  return {
    headerLeft: <HeaderBarsIconComponent screenProp={screenProp}/>,
    headerTitle: title,
  };

};
