import React, {Component} from "react";
import {ButtonGrayComponentStyles} from "./styles";
import {Keyboard, TouchableOpacityProps} from "react-native";

interface Props {
  text: string,
  onPress: () => void,
  style?: TouchableOpacityProps,
}

export class ButtonGrayComponent extends Component<Props> {

  clickButton = () => {
    Keyboard.dismiss();
    this.props.onPress();
  };

  render = () => {

    const {
      text,
      onPress,
      style
    } = this.props;

    const {
      Touchable,
      TextTouchable,
    } = ButtonGrayComponentStyles;

    return (
      <Touchable onPress={this.clickButton} style={style}>
        <TextTouchable>{ text }</TextTouchable>
      </Touchable>
    )

  }

}
