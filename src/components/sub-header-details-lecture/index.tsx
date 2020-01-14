import React, {Component} from "react";
import {SubHeaderDetailsLectureComponentStyles} from "./styles";
import {LectureResponseModel, LectureTypeResponseModel} from "../../services/lectures/model";
import {SubHeaderDetailsLectureComponentConst} from "./constants";

interface Props {
  lecture: LectureResponseModel,
  type: LectureTypeResponseModel
}

export class SubHeaderDetailsLectureComponent extends Component<Props> {

  render = () => {

    const {lecture, type} = this.props;

    const {
      speaker,
      date,
      hour,
    } = SubHeaderDetailsLectureComponentConst

    const {
      View,
      ViewType,
      ViewTextType,
      ViewTitle,
      ViewTextTitle,
      ViewMessage,
      ViewTextMessage,
    } = SubHeaderDetailsLectureComponentStyles;

    return (
      <View>
        <ViewType>
          <ViewTextType>
            { type.Descricao }
          </ViewTextType>
        </ViewType>
        <ViewTitle>
          <ViewTextTitle>
            { lecture.Titulo }
          </ViewTextTitle>
        </ViewTitle>
        <ViewMessage>
          <ViewTextMessage>
            { speaker } { lecture.Palestrante }
          </ViewTextMessage>
        </ViewMessage>
        <ViewMessage>
          <ViewTextMessage>
            { date } { lecture.Data }
          </ViewTextMessage>
          <ViewTextMessage>
            { hour } { lecture.Hora }
          </ViewTextMessage>
        </ViewMessage>
      </View>
    )

  }

}
