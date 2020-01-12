import styled from 'styled-components/native';
import {Colors} from "../../theme/colors";

export const WarningMessageComponentStyle = {
  View: styled.View`
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  `,
  Image: styled.Image`
    width: 350px;
    height: 300px;
  `,
  Title: styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-top: 5px;
    margin-bottom: 5px;
  `,
  Message: styled.Text`
    font-size: 15px;
    margin-top: 5px;
    margin-bottom: 5px;
  `,
  ButtonText: styled.Text`
    color: ${Colors.blue};
    text-decoration: underline;
    text-decoration-color: ${Colors.blue};
  `
};
