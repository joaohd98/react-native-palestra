import styled from "styled-components/native";
import {Colors} from "../../theme/colors";

export const SubHeaderDetailsLectureComponentStyles = {
  View: styled.View`
    margin: 15px 10px;
  `,
  ViewType: styled.View`
    padding: 5px 10px;
    align-self: flex-start;
    border: 1px solid ${Colors.black};
    background-color: ${Colors.green};
    color: ${Colors.black};
  `,
  ViewTextType: styled.Text`
    font-size: 15px;
    font-weight: 600;
    color: ${Colors.black};
  `,
  ViewTitle: styled.View`
    margin-top: 7.5px;
    margin-bottom: 4px;
  `,
  ViewTextTitle: styled.Text`
    font-size: 16px;
    font-weight: 700;
    color: ${Colors.black};
  `,
  ViewMessage: styled.View`
    flex-direction: row;
    margin-bottom: 3px;
  `,
  ViewTextMessage: styled.Text`
    font-size: 15px;
    margin-right: 5px;
    color: ${Colors.black};
  `,
};
