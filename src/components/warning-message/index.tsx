import React, {Component} from 'react';
import { WarningMessageComponentStyle } from './styles';
import {TouchableOpacity} from "react-native";

export interface WarningMessageComponentProps {
  image?: number;
  title?: string;
  message?: string;
  buttonText?: string
  onButtonPress?: () => void;
}

export class WarningMessageComponent extends Component<WarningMessageComponentProps> {

  render = () => {

    const {
      View,
      Image,
      Title,
      Message,
      ButtonText
    } = WarningMessageComponentStyle;

    const {
      image,
      title,
      message,
      buttonText,
      onButtonPress
    } = this.props;

    return (
      <View>
        { image ? <Image source={image} resizeMode={"stretch"} /> : null }
        { title ? <Title>{ title }</Title> : null }
        { message ? <Message>{ message }</Message> : null }
        { buttonText && onButtonPress ?
            <TouchableOpacity onPress={onButtonPress}>
              <ButtonText>{buttonText}</ButtonText>
            </TouchableOpacity>
          : null
        }
      </View>
    )

  }

}
