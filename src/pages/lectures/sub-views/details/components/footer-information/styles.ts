import styled from "styled-components/native";
import {ButtonGrayComponent} from "../../../../../../components/button-gray";

export const LectureDetailsPageFooterInformationStyles = {
  View: styled.View`
    margin-top: 20px;
    align-self: center;
  `,
  Text: styled.Text`
    font-weight: 700;
    font-size: 13px;
    margin-bottom: 10px;
  `,
  Button: styled(ButtonGrayComponent)`
    align-self: center;
    width: 140px;
  `
};
