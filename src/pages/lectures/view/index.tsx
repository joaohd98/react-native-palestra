import React, {Component} from "react";
import {Text, View} from "react-native";
import {connect} from 'react-redux';
import {StatesReducers} from "../../../redux/reducers";
import {bindActionCreators, Dispatch} from "redux";
import {LecturesPageInitialState} from "./redux/lectures-page-reducer";
import {ServiceStatus} from "../../../services/model";
import {LecturesPageWarningMessage} from "./components/warning-message";
import {Container} from "../../../theme/components";
import {LecturesPageHeader} from "./components/header";
import {LecturesPageModel} from "./model";

export class Lecture extends Component<LecturesPageModel.Props> {

  static navigationOptions = LecturesPageHeader;

  componentDidMount = () => {

    this.props.functions?.getLectureTypes();

  };

  getLectureWarningComponent = (): JSX.Element => {

    const { status, lecturesTypes, functions } = this.props;

    return (
      <LecturesPageWarningMessage
        status={status!}
        tryAgain={lecturesTypes == null ? functions?.getLectureTypes! : functions?.getLectures!}
      />
    )

  };

  render() {

    const { status, lectures, lecturesTypes, lectureTypeSelected, functions } = this.props;

    const getElement = {
      [ServiceStatus.loading]:  <View/>,
      [ServiceStatus.noInternetConnection]: this.getLectureWarningComponent(),
      [ServiceStatus.exception]: this.getLectureWarningComponent(),
      [ServiceStatus.success]: <View/>,
      [ServiceStatus.noAction]: <View/>,
    };

    return (
      <Container>
        { this.getLectureWarningComponent() }
      </Container>
    )

  }

}


const mapStateToProps = (state: StatesReducers) => {
  return state.lecturesPageInitialState;
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  functions: bindActionCreators(LecturesPageInitialState.functions!, dispatch)
});

export const LecturePage = connect(mapStateToProps, mapDispatchToProps)(Lecture);
