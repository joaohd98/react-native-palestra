import React, {Component} from "react";
import {LectureDetailsPageFooterInformationConst} from "./constants";
import {LectureDetailsPageFooterInformationStyles} from "./styles";
import {SubscribeResponseModel} from "../../../../../../services/my-subscriptions/model";
import {NavigationScreenProp, NavigationState} from "react-navigation";
import {LectureDetailsPageModel} from "../../model";

interface Props {
  subscription: SubscribeResponseModel,
  navigation: NavigationScreenProp<NavigationState, LectureDetailsPageModel.Props>
}

export class LectureDetailsPageFooterInformation extends Component<Props> {

  render = () => {

    const { subscription, navigation } = this.props;
    const {View, Text, Button } = LectureDetailsPageFooterInformationStyles;
    const { message, button } = LectureDetailsPageFooterInformationConst;

    return (
      <View>
        <Text>{`${message} ${subscription.DataCadastro} ${subscription.HoraCadastro}`}</Text>
        <Button text={button} onPress={() => navigation.goBack()}/>
      </View>
    )

  }

}
