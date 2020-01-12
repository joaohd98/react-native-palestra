import React, {Component} from "react";
import {ServiceStatus} from "../../../../../services/model";
import {WarningMessageComponent, WarningMessageComponentProps} from "../../../../../components/warning-message";
import {images} from "../../../../../assets";
import {LecturesPageWarningMessageConstants} from "./constants";

interface Props {
  status: ServiceStatus,
  tryAgain: () => void,
}

export class LecturesPageWarningMessage extends Component<Props> {

  getWarningProps = (): WarningMessageComponentProps => {

    const {
      title,
      statusNoInternetConnection,
      statusException,
      button
    } = LecturesPageWarningMessageConstants;

    const {status, tryAgain} = this.props;

    return {
      image: images.warning,
      title: title,
      message: status === ServiceStatus.exception ? statusException : statusNoInternetConnection,
      buttonText: button,
      onButtonPress: () => tryAgain()
    }

  };

  render = () => {

    return <WarningMessageComponent {...this.getWarningProps()}/>;

  }

}
