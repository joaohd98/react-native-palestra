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

    const hasSubscribe = false;
    const {navigation, goToSubscribe} = this.props;
    const {ButtonView, Button, Text} = LectureDetailsPageFooterSubscribeStyles;
    const {buttonAdd, buttonBack, messageSubscribeSuccess} = LectureDetailsPageFooterSubscribeConst;

    return (
      <ButtonView hasMultipleButtons={!hasSubscribe}>
        { hasSubscribe ? <Text>{ messageSubscribeSuccess }</Text> : <></> }
        { !hasSubscribe ? <Button text={buttonAdd} onPress={goToSubscribe}/> : <></> }
        <Button text={buttonBack} onPress={() => navigation.goBack()}/>
      </ButtonView>
    )

  }

}
