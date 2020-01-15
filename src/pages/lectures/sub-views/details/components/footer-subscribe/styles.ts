import styled from "styled-components/native";
import {ButtonGrayComponent} from "../../../../../../components/button-gray";

export const LectureDetailsPageFooterSubscribeStyles = {
  ButtonView: styled.View`
    flex-direction: ${(props: {hasMultipleButtons: boolean}) => props.hasMultipleButtons ? "row" : "column"};
    justify-content: space-around;
    margin-top: 20px;
  `,
  Text: styled.Text`
    align-self: center;
    font-weight: 700;
    font-size: 13px;
    margin-bottom: 10px;
  `,
  Button: styled(ButtonGrayComponent)`
    align-self: center;
    width: 140px;
  `
};
