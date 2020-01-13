import React from "react";
import {MySubscriptionsPageHeaderConst} from "./constants";
import {HeaderBarsIconComponent} from "../../../../../components/header-bars-icon";
import {NavigationScreenProp, NavigationState} from "react-navigation";
import {MySubscriptionsPageModel} from "../../model";

export const MySubscriptionsPageHeader = (screenProp: { navigation: NavigationScreenProp<NavigationState, MySubscriptionsPageModel.Props> }) => {

  const {
    title,
  } = MySubscriptionsPageHeaderConst;

  return {
    headerLeft: <HeaderBarsIconComponent screenProp={screenProp}/>,
    headerTitle: title,
  };

};
