import styled from 'styled-components/native'
import {Helpers} from "../../helpers";
import {Colors} from "../../theme/colors";
import Icon from "react-native-vector-icons/FontAwesome";

export const SideMenuComponentStyles = {
  View: styled.View`
    height: 100%;
    background-color: ${Colors.white};
    padding-top: ${Helpers.takePercentScreen(10, "height")};
    padding-left: 25px;
    padding-right: 25px;
  `,
  ViewIcon: styled.TouchableOpacity`
    align-self: flex-start;
    margin-bottom: 20px;
  `,
  Icon: styled(Icon)`
    font-size: 30px;
    color: ${Colors.gray}
  `,
  ViewList: styled.View`
    align-self: flex-start;
    margin-bottom: 20px;
  `,
  ViewSubList: styled.View`
    padding-left: 25px;
    margin-top: 10px;
    margin-bottom: 10px;
  `,
  TextListTitle: styled.Text`
    font-size: 18px;
    color: ${Colors.gray}
    margin-bottom: 10px;
  `,
  TextLink: styled.Text`
    font-size: 18px;
    text-decoration: underline;
    color: ${Colors.blue};
    text-decoration-color: ${Colors.blue};
  `
};
