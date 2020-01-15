import React from "react";
import {NavigationScreenProp, NavigationState} from "react-navigation";
import {LectureSubscriptionPageModel} from "../../model";
import {LectureSubscriptionPageHeaderConst} from "./constants";
import {HeaderBarsIconComponent} from "../../../../../../components/header-bars-icon";

export const LectureSubscriptionPageHeader = (screenProp: { navigation: NavigationScreenProp<NavigationState, { hideHeader: boolean }> }) => {

  const {
    title,
  } = LectureSubscriptionPageHeaderConst;

  if (screenProp.navigation.state.params?.hideHeader) {
    return {
      headerLeft: null,
      headerTitle: title,
    }
  }

  return {
    headerLeft: <HeaderBarsIconComponent screenProp={screenProp}/>,
    headerTitle: title,
  };

};
