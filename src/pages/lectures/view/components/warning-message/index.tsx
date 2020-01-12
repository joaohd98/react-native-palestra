import React, {Component} from "react";
import {WarningMessageComponent, WarningMessageComponentProps} from "../../../../../components/warning-message";
import {images} from "../../../../../assets";
import {LecturesPageWarningMessageConstants} from "./constants";

export enum LecturesPageWarningMessageStatus {
  exception,
  noInternetConnection,
  emptyList
}

interface Props {
  status: LecturesPageWarningMessageStatus,
  tryAgain?: () => void,
}

export class LecturesPageWarningMessage extends Component<Props> {


  getMessage = (): string => {

    const {status} = this.props;

    const {
      statusNoInternetConnection,
      statusException,
      statusEmptyList,
    } = LecturesPageWarningMessageConstants;

    const messages = {
      [LecturesPageWarningMessageStatus.noInternetConnection]: statusNoInternetConnection,
      [LecturesPageWarningMessageStatus.exception]: statusException,
      [LecturesPageWarningMessageStatus.emptyList]: statusEmptyList,
    };

    return messages[status];

  };

  getWarningProps = (): WarningMessageComponentProps => {

    const {
      title,
      button
    } = LecturesPageWarningMessageConstants;

    const {status, tryAgain} = this.props;

    let warning: any = {
      image: images.warning,
      title: title,
      message: this.getMessage(),
    };

    if(tryAgain) {
      warning = {
        ...warning,
        buttonText: button,
        onButtonPress: () => tryAgain()
      }
    }

    return  warning

  };

  render = () => {

    return <WarningMessageComponent {...this.getWarningProps()}/>;

  }

}
