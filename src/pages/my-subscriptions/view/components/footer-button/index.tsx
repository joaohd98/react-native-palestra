import React, {Component} from "react";
import {MySubscriptionsPageFooterButtonStyles} from "./styles";
import {MySubscriptionsPageFooterButtonConst} from "./constansts";
import {NavigationScreenProp, NavigationState} from "react-navigation";

interface Props {
  navigation: NavigationScreenProp<NavigationState, Props>
}

export class MySubscriptionsPageFooterButton extends Component<Props> {

  render = () => {

    const { navigation } = this.props;
    const { ButtonGray } = MySubscriptionsPageFooterButtonStyles;
    const { back } = MySubscriptionsPageFooterButtonConst;

    return <ButtonGray text={back} onPress={() => navigation.goBack()}/>;

  }

}