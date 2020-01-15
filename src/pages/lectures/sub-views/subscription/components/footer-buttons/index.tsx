import React, {Component} from "react";
import {LectureSubscriptionPageFooterButtonsStyles} from "./styles";
import {LectureSubscriptionPageFooterButtonsConst} from "./constants";
import {NavigationScreenProp, NavigationState} from "react-navigation";
import {LectureSubscriptionPageModel} from "../../model";

interface Props {
  isValid: boolean,
  onSubmit: () => void,
  navigation: NavigationScreenProp<NavigationState, {hideHeader: boolean}>
}

export class LectureSubscriptionPageFooterButtons extends Component<Props> {

  render = () => {

    const {
      isValid,
      onSubmit,
      navigation
    } = this.props;

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
        <Button text={buttonSave} onPress={onSubmit} disabled={!isValid}/>
        <Button text={buttonCancel} onPress={() => navigation.goBack()}/>
      </ButtonView>
    )


  }

}
