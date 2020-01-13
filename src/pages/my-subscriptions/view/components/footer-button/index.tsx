import React, {Component} from "react";
import {MySubscriptionsPageFooterButtonStyles} from "./styles";
import {MySubscriptionsPageFooterButtonConst} from "./constansts";

export class MySubscriptionsPageFooterButton extends Component {

  render = () => {

    const { ButtonGray } = MySubscriptionsPageFooterButtonStyles;
    const { back } = MySubscriptionsPageFooterButtonConst;

    return <ButtonGray text={back} onPress={() => {}}/>;

  }

}
