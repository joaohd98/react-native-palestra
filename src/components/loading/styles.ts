import styled from "styled-components/native";
import {Colors} from "../../theme/colors";

export const LoadingComponentStyles = {
  View: styled.View`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: ${Colors.backgroundOpacity};
  `,
  Container: styled.View`
    margin: auto;
    background-color: ${Colors.white};
    flex-direction: row;
    padding: 25px;
    border-radius: 10px;
  `,
  Spinner: styled.ActivityIndicator`
    margin-right: 20px;
    font-size: 20px;
  `,
  Text: styled.Text`
    font-size: 20px;
    margin-top: 5px;
  `
};
