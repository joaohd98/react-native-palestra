import React, {Component} from "react";
import {LectureDetailsPageFooterSubscribeStyles} from "./styles";
import {LectureDetailsPageFooterSubscribeConst} from "./constants";

export class LectureDetailsPageFooterSubscribe extends Component {

  render = () => {

    const {ButtonView, Button} = LectureDetailsPageFooterSubscribeStyles;
    const {buttonAdd, buttonBack} = LectureDetailsPageFooterSubscribeConst;

    return (
      <ButtonView>
        <Button text={buttonAdd} onPress={() => {}}/>
        <Button text={buttonBack} onPress={() => {}}/>
      </ButtonView>
    )

  }

}
