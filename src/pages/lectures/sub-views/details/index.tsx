import React, {Component} from "react";
import {StatesReducers} from "../../../../redux/reducers";
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import {LectureDetailsPageInitialState} from "./redux/lecture-details-reducer";
import {ContainerScroll} from "../../../../theme/components";
import {LectureDetailsPageHeader} from "./components/header";
import {SubHeaderDetailsLectureComponent} from "../../../../components/sub-header-details-lecture";
import {LectureDetailsPageModel} from "./model";
import {LectureDetailsPageDescription} from "./components/description";
import {LectureDetailsPageFooterInformation} from "./components/footer-information";
import {LectureDetailsPageFooterSubscribe} from "./components/footer-subscribe";

export class LectureDetails extends Component<LectureDetailsPageModel.Props> {

  static navigationOptions = LectureDetailsPageHeader;

  render = () => {

    return (
      <ContainerScroll>
        <SubHeaderDetailsLectureComponent/>
        <LectureDetailsPageDescription/>
        <LectureDetailsPageFooterSubscribe/>
        <LectureDetailsPageFooterInformation/>
      </ContainerScroll>
    )

  }

}
const mapStateToProps = (state: StatesReducers) => {
  return state.lectureDetailsPageInitialState;
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  functions: bindActionCreators(LectureDetailsPageInitialState.functions!, dispatch)
});

export const LectureDetailsPage = connect(mapStateToProps, mapDispatchToProps)(LectureDetails);
