import React, {Component} from "react";
import {LectureSubscriptionPageModel} from "../../model";
import {LectureSubscriptionPageFooterButtonsStyles} from "./styles";
import {LectureSubscriptionPageFooterButtonsConst} from "./constants";

export class LectureSubscriptionPageFooterButtons extends Component<LectureSubscriptionPageModel.Props> {

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
