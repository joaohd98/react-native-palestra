import React from "react";
import {NavigationScreenProp, NavigationState} from "react-navigation";
import {LecturesPageHeaderConst} from "./constants";
import {TouchableOpacity} from "react-native";
import {LecturesPageHeaderStyles} from "./styles";
import {LecturesPageModel} from "../../model";

export const LecturesPageHeader = (screenProp: { navigation: NavigationScreenProp<NavigationState, LecturesPageModel.Props> }) => {

  const {
    title,
    barsIcon
  } = LecturesPageHeaderConst;

  const {
    Icon,
  } = LecturesPageHeaderStyles;


  return {
    headerLeft: (
      <TouchableOpacity onPress={screenProp.navigation.openDrawer}>
        <Icon name={barsIcon}/>
      </TouchableOpacity>
    ),
    headerTitle: title,
  };

};
