import React, {Component} from "react";
import {SubHeaderDetailsLectureComponentStyles} from "./styles";

export class SubHeaderDetailsLectureComponent extends Component {

  render = () => {

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
            Gestão de pessoas
          </ViewTextType>
        </ViewType>
        <ViewTitle>
          <ViewTextTitle>
            Gestao de pessoas por competéncias
          </ViewTextTitle>
        </ViewTitle>
        <ViewMessage>
          <ViewTextMessage>
            Palestrante: Maria dos anjos
          </ViewTextMessage>
        </ViewMessage>
        <ViewMessage>
          <ViewTextMessage>
            Data: 16/09/2018
          </ViewTextMessage>
          <ViewTextMessage>
            Horário: 19/02/2019
          </ViewTextMessage>
        </ViewMessage>
      </View>
    )

  }

}
