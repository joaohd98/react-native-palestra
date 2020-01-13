import styled from "styled-components/native";
import {Colors} from "../../theme/colors";

export const ButtonGrayComponentStyles = {
  Touchable: styled.TouchableOpacity`
    background-color: ${Colors.gray};
    border: ${Colors.black};
    align-self: flex-start;
  `,
  TextTouchable: styled.Text`
    padding: 10px 50px;
    font-size: 16px;
  `,
};
