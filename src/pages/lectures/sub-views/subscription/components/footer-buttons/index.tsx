import React, {Component} from "react";
import {LectureSubscriptionPageFooterButtonsStyles} from "./styles";
import {LectureSubscriptionPageFooterButtonsConst} from "./constants";

export class LectureSubscriptionPageFooterButtons extends Component {

  render = () => {

    const {
      ButtonView,
      Button,
    } =  LectureSubscriptionPageFooterButtonsStyles;

    const {
      buttonSave,
      buttonCancel,
    } =  LectureSubscriptionPageFooterButtonsConst;

    return (
      <ButtonView>
        <Button text={buttonSave} onPress={() => {}}/>
        <Button text={buttonCancel} onPress={() => {}}/>
      </ButtonView>
    )


  }

}
