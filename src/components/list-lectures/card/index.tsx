import React, {Component} from "react";
import {LectureResponseModel} from "../../../services/lectures/model";
import {LecturesPageCardConst} from "./constants";
import {images} from "../../../assets";
import {ListLectureCardStyles} from "./styles";


interface Props {
  lecture: LectureResponseModel,
}

export class ListLectureCard extends Component<Props> {

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
    } = ListLectureCardStyles;

    const {
      lectureSpeaker,
      lectureDate,
      lectureHour,
      lectureVacancies,
      soldOut,
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
              <CardText>{ lectureVacancies } {lecture.QtdVagasDisponiveis > 0 ? lecture.QtdVagasDisponiveis : soldOut }</CardText>
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
