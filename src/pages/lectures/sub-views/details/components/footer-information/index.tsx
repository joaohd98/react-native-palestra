import React, {Component} from "react";
import {LectureDetailsPageFooterInformationConst} from "./constants";
import {LectureDetailsPageFooterInformationStyles} from "./styles";
import {SubscribeResponseModel} from "../../../../../../services/my-subscriptions/model";
import {NavigationScreenProp, NavigationState} from "react-navigation";
import {LectureDetailsPageModel} from "../../model";
import {LectureResponseModel} from "../../../../../../services/lectures/model";

interface Props {
  lecture: LectureResponseModel,
  subscription: SubscribeResponseModel,
  navigation: NavigationScreenProp<NavigationState, LectureDetailsPageModel.Props>
}

export class LectureDetailsPageFooterInformation extends Component<Props> {

  getMessage = (): string => {

    const { message,  messageSoldOff } = LectureDetailsPageFooterInformationConst;

    const {lecture, subscription } = this.props;

    if(lecture.QtdVagasDisponiveis === 0)
      return messageSoldOff;

    else
      return `${message} ${subscription.DataCadastro} ${subscription.HoraCadastro}`;

  };

  render = () => {

    const { lecture, navigation } = this.props;
    const {View, Text, Button } = LectureDetailsPageFooterInformationStyles;
    const { button } = LectureDetailsPageFooterInformationConst;

    return (
      <View>
        <Text soldOff={lecture.QtdVagasDisponiveis === 0}>{ this.getMessage() }</Text>
        <Button text={button} onPress={() => navigation.goBack()}/>
      </View>
    )

  }

}
