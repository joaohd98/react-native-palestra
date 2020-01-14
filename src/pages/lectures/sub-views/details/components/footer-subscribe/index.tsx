import React, {Component} from "react";
import {LectureDetailsPageFooterSubscribeStyles} from "./styles";
import {LectureDetailsPageFooterSubscribeConst} from "./constants";
import {NavigationScreenProp, NavigationState} from "react-navigation";
import {LectureDetailsPageModel} from "../../model";

interface Props {
  goToSubscribe: () => void
  navigation: NavigationScreenProp<NavigationState, LectureDetailsPageModel.Props>
}

export class LectureDetailsPageFooterSubscribe extends Component<Props> {

  render = () => {

    const {navigation, goToSubscribe} = this.props;
    const {ButtonView, Button} = LectureDetailsPageFooterSubscribeStyles;
    const {buttonAdd, buttonBack} = LectureDetailsPageFooterSubscribeConst;

    return (
      <ButtonView>
        <Button text={buttonAdd} onPress={goToSubscribe}/>
        <Button text={buttonBack} onPress={() => navigation.goBack()}/>
      </ButtonView>
    )

  }

}
