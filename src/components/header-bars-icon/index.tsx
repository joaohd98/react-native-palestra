import {Keyboard, TouchableOpacity} from "react-native";
import React, {Component} from "react";
import {HeaderBarsIconComponentStyles} from "./styles";
import {NavigationScreenProp, NavigationState} from "react-navigation";

interface Props {
  screenProp: { navigation: NavigationScreenProp<NavigationState, any> }
}

export class HeaderBarsIconComponent extends Component<Props> {

  openSideMenu = () => {
    Keyboard.dismiss();
    this.props.screenProp.navigation.openDrawer();
  };

  render = () => {

    const {
      BarsIcon
    } = HeaderBarsIconComponentStyles;

    return (
      <TouchableOpacity onPress={this.openSideMenu}>
        <BarsIcon name={"bars"}/>
      </TouchableOpacity>
    )

  }



}
