import React, {Component} from "react";
import {MySubscriptionsPageFooterButtonStyles} from "./styles";
import {MySubscriptionsPageFooterButtonConst} from "./constansts";
import {MySubscriptionsPageModel} from "../../model";
import {NavigationStackProp, NavigationStackState} from "react-navigation-stack";

interface Props {
  navigation: NavigationStackProp<NavigationStackState, MySubscriptionsPageModel.Props>
}

export class MySubscriptionsPageFooterButton extends Component<Props> {

  render = () => {

    const { navigation } = this.props;
    const { ButtonGray } = MySubscriptionsPageFooterButtonStyles;
    const { back } = MySubscriptionsPageFooterButtonConst;

    return <ButtonGray text={back} onPress={() => navigation.popToTop()}/>;

  }

}
