import React, {Component} from "react";
import {InputComponentStyles} from "./styles";
import {ScrollView} from "react-native";

export class InputComponent extends Component {

  render = () => {

    const {
      View,
      InputContainer,
      TextLabel,
      Input,
      ViewWarningMessage,
      ViewTitleWarningMessage,
    } = InputComponentStyles;

    return (
      <View>
        <InputContainer>
          <TextLabel>Nome:</TextLabel>
          <ScrollView scrollEnabled={false}>
            <Input />
          </ScrollView>
        </InputContainer>
        <ViewWarningMessage>
          <ViewTitleWarningMessage>
            Campo E-mail é obrigatorio.
          </ViewTitleWarningMessage>
        </ViewWarningMessage>
      </View>
    )

  }

}
