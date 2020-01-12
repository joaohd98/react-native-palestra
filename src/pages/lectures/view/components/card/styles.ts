import styled from "styled-components/native";
import {Colors} from "../../../../../theme/colors";
import {ProgressiveImageComponent} from "../../../../../components/progressive-image";
import {Animated} from "react-native";

export const LecturesPageCardStyles = {
  CardView: styled.View `
    margin: 10px;
    border: 1px solid ${Colors.blue};
    padding: 10px;
  `,
  CardContent: styled.View`
    flex-direction: row;
  `,
  CardDescriptionContent: styled.View`
    flex: 1;
    padding: 0 10px;
  `,
  CardLogo: styled(ProgressiveImageComponent) `
    width: 85px;
    height: 85px;
  `,
  CardInformationContent: styled.View`
  `,
  CardText: styled(Animated.Text) `
    margin-bottom: 3px;
    font-size: 13px;
    color: ${Colors.black};
    flex: 1;
  `,
  CardDateHour: styled.View`
    flex-direction: row;
  `,
  CardFooterContent: styled.View `
    flex-direction: row;
  `,
  CardFooterButton: styled.TouchableOpacity`
    justify-content: flex-end
  `,
  CardFooterText: styled(Animated.Text)`
    font-size: 18px;
    color: ${Colors.blue};
    text-decoration: underline;
    text-decoration-color: ${Colors.blue}
  `,
};
