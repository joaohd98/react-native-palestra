import styled from 'styled-components/native';
import {Colors} from "../../theme/colors";

export const WarningMessageComponentStyle = {
  View: styled.View`
    margin: 60px auto;
    width: 90%;
  `,
  Container: styled.View`
    padding: 10px 15px;
    border-radius: 10px;
    border: 2px solid ${Colors.red};
  `,
  Title: styled.Text`
    font-size: 18px;
    color: ${Colors.red}
    font-weight: bold;
    margin-bottom: 15px;
    align-self: center;
  `,
  SubTitle: styled.Text`
    font-size: 16px;
    color: ${Colors.black};
    margin-bottom: 15px;
  `,
  Message: styled.Text`
    font-size: 14px;
    color: ${Colors.grayDark};
    font-weight: bold;
    margin-bottom: 15px;
  `,
  ButtonTouchable: styled.TouchableOpacity`
    align-self: center;
  `,
  ButtonText: styled.Text`
    font-size: 20px
    color: ${Colors.blue};
    text-decoration: underline;
    text-decoration-color: ${Colors.blue};
  `
};
