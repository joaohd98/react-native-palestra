import styled from 'styled-components/native';
import {Colors} from '../../../../../theme/colors';
import {LecturesPageCardStyles} from '../card/styles';

const {
  CardView,
  CardLogo,
  CardContent,
  CardDescriptionContent,
  CardText,
  CardDateHour,
  CardFooterContent,
  CardFooterButton,
  CardFooterText
} = LecturesPageCardStyles;

export const LecturesPageListLoadingStyles = {
  CardView: styled(CardView)``,
  CardLogo: styled(CardLogo)``,
  CardContent: styled(CardContent)``,
  CardDescriptionContent: styled(CardDescriptionContent)``,
  CardText: styled(CardText)`
    width: 75%;
    height: 10px;
    margin-bottom: 5px;
    flex: 0;
  `,
  CardTextLast: styled(CardText)`
    width: 30%;
    height: 10px;
    margin-bottom: 5px;
  `,
  CardFooterContent: styled(CardFooterContent)`
    align-self: flex-end;
  `,
  CardFooterButton: styled(CardFooterButton)``,
  CardFooterText: styled(CardFooterText)`
    width: 100px
    height: 20px;
    margin-right: 5px;
    background-color: ${Colors.skeleton[0]};
  `,
};
