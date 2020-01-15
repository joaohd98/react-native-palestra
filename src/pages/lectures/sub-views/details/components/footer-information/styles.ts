import styled from "styled-components/native";
import {ButtonGrayComponent} from "../../../../../../components/button-gray";
import {Colors} from "../../../../../../theme/colors";

export const LectureDetailsPageFooterInformationStyles = {
  View: styled.View`
    margin-top: 20px;
    align-self: center;
  `,
  Text: styled.Text`
    font-weight: 700;
    font-size: 13px;
    margin-bottom: 10px;
    color: ${(props: {soldOff: boolean}) => props.soldOff ? Colors.danger : Colors.black}
  `,
  Button: styled(ButtonGrayComponent)`
    align-self: center;
    width: 140px;
  `
};
