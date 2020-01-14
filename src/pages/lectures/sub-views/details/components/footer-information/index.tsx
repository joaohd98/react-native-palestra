import React, {Component} from "react";
import {LectureDetailsPageFooterInformationConst} from "./constants";
import {LectureDetailsPageFooterInformationStyles} from "./styles";

export class LectureDetailsPageFooterInformation extends Component {

  render = () => {

    const {View, Text, Button } = LectureDetailsPageFooterInformationStyles;
    const { message, button } = LectureDetailsPageFooterInformationConst;

    return (
      <View>
        <Text>{ message }</Text>
        <Button text={button} onPress={() => {}}/>
      </View>
    )

  }

}
