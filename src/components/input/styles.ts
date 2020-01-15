import styled from "styled-components/native";
import {Colors} from "../../theme/colors";
import {Platform} from "react-native";

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
    width: 70px;
  `,
  Input: styled.TextInput`
    flex: 1;
    padding: ${Platform.OS === "ios" ? 5 : 0}px 6px;
    border: 1.5px solid ${(props: {borderColor: string}) => props.borderColor || Colors.black};
  `,
  ViewWarningMessage: styled.View`
    margin: 10px 10px 5px 10px;
  `,
  ViewTitleWarningMessage: styled.Text`
    font-size: 15px;
    font-weight: 800;
    color:  ${(props: {color: string}) => props.color}
  `,
};
