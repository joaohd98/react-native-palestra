import React, {Component} from "react";
import {LectureDetailsPageDescriptionStyles} from "./styles";
import {LectureResponseModel} from "../../../../../../services/lectures/model";

interface Props {
  lecture: LectureResponseModel
}

export class LectureDetailsPageDescription extends Component<Props> {

  render = () => {

    const {lecture} = this.props;
    const {View, Text} = LectureDetailsPageDescriptionStyles;

    return (
      <View>
        <Text>
          { lecture.Descricao }
        </Text>
      </View>
    )

  }

}
