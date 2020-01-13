import React, {Component} from 'react';
import { WarningMessageComponentStyle } from './styles';

export interface WarningMessageComponentProps {
  title?: string;
  subTitle?: string,
  message?: string;
  buttonText?: string
  onButtonPress?: () => void;
}

export class WarningMessageComponent extends Component<WarningMessageComponentProps> {


  getButton = () => {

    const {
      ButtonTouchable,
      ButtonText
    } = WarningMessageComponentStyle;

    const {
      buttonText,
      onButtonPress
    } = this.props;

    return (
      buttonText && onButtonPress ?
        <ButtonTouchable onPress={onButtonPress}>
          <ButtonText>{buttonText}</ButtonText>
        </ButtonTouchable>
      : null
    )


  };

  render = () => {

    const {
      View,
      Container,
      Title,
      SubTitle,
      Message,
    } = WarningMessageComponentStyle;

    const {
      title,
      subTitle,
      message,
    } = this.props;

    return (
      <View>
        <Container>
          { title ? <Title>{title}</Title> : null }
          { subTitle ? <SubTitle>{subTitle}</SubTitle> : null }
          { message ? <Message>{ message }</Message> : null }
          { this.getButton() }
        </Container>
      </View>
    )

  }

}
