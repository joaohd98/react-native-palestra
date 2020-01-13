import React, {Component} from "react";
import {ButtonGrayComponentStyles} from "./styles";
import { TouchableOpacityProps} from "react-native";

interface Props {
  text: string,
  onPress: () => void,
  style?: TouchableOpacityProps,
}

export class ButtonGrayComponent extends Component<Props> {

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
      <Touchable onPress={onPress} style={style}>
        <TextTouchable>{ text }</TextTouchable>
      </Touchable>
    )

  }

}
