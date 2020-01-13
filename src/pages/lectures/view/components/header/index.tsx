import React from "react";
import {NavigationScreenProp, NavigationState} from "react-navigation";

import {HeaderBarsIconComponent} from "../../../../../components/header-bars-icon";
import {LecturesPageHeaderConst} from "./constants";
import {LecturesPageModel} from "../../model";

export const LecturesPageHeader = (screenProp: { navigation: NavigationScreenProp<NavigationState, LecturesPageModel.Props> }) => {

  const {
    title,
  } = LecturesPageHeaderConst;

  return {
    headerLeft: <HeaderBarsIconComponent screenProp={screenProp}/>,
    headerTitle: title,
  };

};
