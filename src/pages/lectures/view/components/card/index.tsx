import React, {Component} from "react";
import {LectureResponseModel} from "../../../../../services/lectures/model";
import {LecturesPageCardStyles} from "./styles";
import {images} from "../../../../../assets";

interface Props {
  lecture: LectureResponseModel,
}

export class LecturesPageCard extends Component<Props> {

  render = () => {

    const {
      lecture
    } = this.props;

    const {
      CardView,
      CardContent,
      CardLogo,
      CardDescriptionContent,
      CardText,
      CardFooterContent,
      CardFooterButton,
      CardFooterText
    } = LecturesPageCardStyles;

    const source: any = images.profiles[lecture.Imagem];

    return (
      <CardView>
        <CardContent>
          <CardLogo source={source} resizeMode={'stretch'}/>
          <CardDescriptionContent>
            <CardText>{ lecture.Titulo }</CardText>
            <CardText>Palestrante: { lecture.Palestrante }</CardText>
            <CardText>Data: { lecture.Data } Hora: { lecture.Hora}</CardText>
            <CardFooterContent>
              <CardText>Vagas {lecture.QtdVagasDisponiveis}</CardText>
              <CardFooterButton>
                <CardFooterText>Ver mais</CardFooterText>
              </CardFooterButton>
            </CardFooterContent>
          </CardDescriptionContent>
        </CardContent>
      </CardView>
    )

  }

}
