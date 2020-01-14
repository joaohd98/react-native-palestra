import styled from "styled-components/native";
import {ButtonGrayComponent} from "../../../../../../components/button-gray";

export const LectureSubscriptionPageFooterButtonsStyles = {
  ButtonView: styled.View`
    flex-direction: row;
    justify-content: space-around;
  `,
  Button: styled(ButtonGrayComponent)`
    width: 140px;
  `
};
