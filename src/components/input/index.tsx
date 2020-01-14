import React, {Component} from "react";
import {InputComponentStyles} from "./styles";
import {ScrollView} from "react-native";
import {FormValidators} from "../../validation/form-validators";
import {Rules} from "../../validation/rules";
import {Colors} from "../../theme/colors";

interface InputComponentProps {
  label: string,
  value?: string,
  formMessages?: FormValidators[],
  changeValue?: (value: string) => void;
  isValid?: (valid: boolean) => void;
}

enum Status {
  none,
  valid,
  invalid,
}

interface State {
  status: Status,
  inputValue: string,
  isValid: boolean,
  hasFocus: boolean,
  firstInteraction: boolean,
  warningMessage: string,
}

export class InputComponent extends Component<InputComponentProps, State> {

  state = {
    status: Status.none,
    inputValue: "",
    isValid: false,
    hasFocus: false,
    firstInteraction: true,
    warningMessage: "",
  };

  componentDidUpdate(prevProps: Readonly<InputComponentProps>, prevState: Readonly<State>, snapshot?: any): void {

    const {formMessages} = this.props;
    const {inputValue, firstInteraction} = this.state;

    if(prevState.inputValue !== inputValue || prevState.firstInteraction !== firstInteraction) {

      if(!formMessages || formMessages.length === 0)
        this.setState({status: Status.none});

      else {

        let states = {
          status: Status.valid,
          warningMessage: ""
        };

        for(let validator of formMessages) {
          if (!Rules.validate(validator.type, inputValue)) {
            states = {
              status: Status.invalid,
              warningMessage: validator.message
            };
            break;
          }
        }

        this.setState(states);

      }

    }

  }

  getWarningMessage = (): JSX.Element => {

    const {status, warningMessage, hasFocus, firstInteraction} = this.state;

    const {
      ViewWarningMessage,
      ViewTitleWarningMessage,
    } = InputComponentStyles;

    if(!firstInteraction && status === Status.invalid) {
      return (
        <ViewWarningMessage>
          <ViewTitleWarningMessage color={hasFocus ? Colors.warning : Colors.danger}>
            { warningMessage }
          </ViewTitleWarningMessage>
        </ViewWarningMessage>
      );
    }

    return <></>;

  };

  getBorderColor = (): string => {

    const {status, hasFocus, inputValue, firstInteraction} = this.state;

    if(inputValue && status === Status.valid)
      return Colors.success;

    else if(firstInteraction || status === Status.none)
      return "";

    else if(status === Status.invalid)
      return hasFocus ? Colors.warning : Colors.danger;

    return "";

  };

  render = () => {

    const {
      label,
      value
    } = this.props;

    const {
      View,
      InputContainer,
      TextLabel,
      Input,
    } = InputComponentStyles;

    return (
      <View>
        <InputContainer>
          <TextLabel>{ label }</TextLabel>
          <ScrollView scrollEnabled={false}>
            <Input
              value={value}
              borderColor={this.getBorderColor()}
              onChangeText={text => this.setState({inputValue: text})}
              onFocus={() => this.setState({hasFocus: true})}
              onBlur={() => this.setState({hasFocus: false, firstInteraction: false})}
            />
          </ScrollView>
        </InputContainer>
        { this.getWarningMessage() }
      </View>
    )

  }

}
