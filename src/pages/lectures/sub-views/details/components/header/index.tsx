import React from "react";
import {NavigationScreenProp, NavigationState} from "react-navigation";
import {LectureDetailsPageModel} from "../../model";
import {LectureDetailsPageHeaderConst} from "./constants";
import {HeaderBarsIconComponent} from "../../../../../../components/header-bars-icon";

export const LectureDetailsPageHeader = (screenProp: { navigation: NavigationScreenProp<NavigationState, LectureDetailsPageModel.Props> }) => {

  const {
    title,
  } = LectureDetailsPageHeaderConst;

  return {
    headerLeft: <HeaderBarsIconComponent screenProp={screenProp}/>,
    headerTitle: title,
  };

};
