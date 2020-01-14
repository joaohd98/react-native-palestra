import React, {Component} from "react";
import {ButtonGrayComponentStyles} from "./styles";
import {Keyboard, TouchableOpacityProps} from "react-native";

interface Props {
  text: string,
  onPress: () => void,
  style?: TouchableOpacityProps,
  disabled?: boolean
}

export class ButtonGrayComponent extends Component<Props> {

  clickButton = () => {
    Keyboard.dismiss();
    this.props.onPress();
  };

  render = () => {

    const {
      text,
      style,
      disabled
    } = this.props;

    const {
      Touchable,
      TextTouchable,
    } = ButtonGrayComponentStyles;

    return (
      <Touchable onPress={this.clickButton} style={style} disabled={disabled} isDisabled={disabled!} >
        <TextTouchable>{ text }</TextTouchable>
      </Touchable>
    )

  }

}
