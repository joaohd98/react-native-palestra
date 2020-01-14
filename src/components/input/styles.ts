import styled from "styled-components/native";
import {Colors} from "../../theme/colors";

export const InputComponentStyles = {
  View: styled.View`
    margin: 10px;
    padding: 0 10px;
  `,
  InputContainer: styled.View`
    flex-direction: row;
  `,
  TextLabel: styled.Text`
    font-size: 15px;
    margin-right: 10px;
    align-self: center;
  `,
  Input: styled.TextInput`
    flex: 1;
    padding: 0px 6px;
    border: 1px solid ${Colors.black};
  `,
  ViewWarningMessage: styled.View`
    margin: 10px 10px 5px 10px;
  `,
  ViewTitleWarningMessage: styled.Text`
    font-size: 15px;
  `,
};
