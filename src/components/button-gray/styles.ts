import styled from "styled-components/native";
import {Colors} from "../../theme/colors";

export const ButtonGrayComponentStyles = {
  Touchable: styled.TouchableOpacity`
    background-color: ${Colors.gray};
    border: ${Colors.black};
    align-self: flex-start;
  `,
  TextTouchable: styled.Text`
    align-self: center;
    padding: 10px;
    font-size: 16px;
  `,
};
