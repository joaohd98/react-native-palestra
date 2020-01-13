import React, {Component} from "react";
import {MySubscriptionsPageWarningMessageConst} from "./constants";
import {WarningMessageComponent} from "../../../../../components/warning-message";

interface Props {
  hasException?: boolean,
  hasNoInternetConnection?: boolean,
  hasEmptyList?: boolean,
  onPress?: () => void
}

export class MySubscriptionsPageWarningMessage extends Component<Props> {

  render = () => {

    const {
      hasException,
      hasNoInternetConnection,
      hasEmptyList,
      onPress
    } = this.props;

    const {
      titleException,
      titleEmptyList,
      titleInternet,
      messageException,
      messageEmptyList,
      messageInternet,
      buttonText
    } = MySubscriptionsPageWarningMessageConst;

    const [title, message] = hasEmptyList ? [titleEmptyList, messageEmptyList]
      : hasException ? [titleException, messageException]
      : hasNoInternetConnection ? [titleInternet, messageInternet]
      : [];

    return (
      <WarningMessageComponent title={title} message={message} onButtonPress={onPress} buttonText={buttonText}/>
    );

  }

}
