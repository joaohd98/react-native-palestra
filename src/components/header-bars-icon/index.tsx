import {TouchableOpacity} from "react-native";
import React, {Component} from "react";
import {HeaderBarsIconComponentStyles} from "./styles";
import {NavigationScreenProp, NavigationState} from "react-navigation";

interface Props {
  screenProp: { navigation: NavigationScreenProp<NavigationState, any> }
}

export class HeaderBarsIconComponent extends Component<Props> {

  render = () => {

    const {
      BarsIcon
    } = HeaderBarsIconComponentStyles;

    const {
      screenProp
    } = this.props;

    return (
      <TouchableOpacity onPress={screenProp.navigation.openDrawer}>
        <BarsIcon name={"bars"}/>
      </TouchableOpacity>
    )

  }



}
