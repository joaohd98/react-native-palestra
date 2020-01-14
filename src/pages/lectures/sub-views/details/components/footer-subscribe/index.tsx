import React, {Component} from "react";
import {LectureDetailsPageFooterSubscribeStyles} from "./styles";
import {LectureDetailsPageFooterSubscribeConst} from "./constants";
import {NavigationScreenProp, NavigationState} from "react-navigation";
import {LectureDetailsPageModel} from "../../model";

interface Props {
  navigation: NavigationScreenProp<NavigationState, LectureDetailsPageModel.Props>
}

export class LectureDetailsPageFooterSubscribe extends Component<Props> {

  render = () => {

    const {navigation} = this.props;
    const {ButtonView, Button} = LectureDetailsPageFooterSubscribeStyles;
    const {buttonAdd, buttonBack} = LectureDetailsPageFooterSubscribeConst;

    return (
      <ButtonView>
        <Button text={buttonAdd} onPress={() => {}}/>
        <Button text={buttonBack} onPress={() => navigation.goBack()}/>
      </ButtonView>
    )

  }

}
