import React, {Component} from "react";
import {LectureResponseModel} from "../../../../../services/lectures/model";
import {LecturesPageCardStyles} from "./styles";
import {images} from "../../../../../assets";
import {LecturesPageCardConst} from "./constants";

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
      CardDateHour,
      CardFooterContent,
      CardFooterButton,
      CardFooterText
    } = LecturesPageCardStyles;

    const {
      lectureSpeaker,
      lectureDate,
      lectureHour,
      lectureVacancies,
      seeMore,
    } = LecturesPageCardConst;

    const source = images.profiles[lecture.Imagem];

    return (
      <CardView>
        <CardContent>
          <CardLogo source={source} resizeMode={'stretch'}/>
          <CardDescriptionContent>
            <CardText>{ lecture.Titulo }</CardText>
            <CardText>{ lectureSpeaker } { lecture.Palestrante }</CardText>
            <CardDateHour>
              <CardText>
                { lectureDate } { lecture.Data }
              </CardText>
              <CardText>
                { lectureHour } { lecture.Hora }
              </CardText>
            </CardDateHour>
            <CardFooterContent>
              <CardText>{ lectureVacancies } {lecture.QtdVagasDisponiveis}</CardText>
              <CardFooterButton>
                <CardFooterText>{ seeMore }</CardFooterText>
              </CardFooterButton>
            </CardFooterContent>
          </CardDescriptionContent>
        </CardContent>
      </CardView>
    )

  }

}
