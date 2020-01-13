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
import {ListLecture} from "../../../components/list-lectures/list";
//import Config from "react-native-config";

export class Lecture extends Component<LecturesPageModel.Props> {

  static navigationOptions = LecturesPageHeader;

  componentDidMount = () => {
    this.getLectureType();
  };

  getLectureType = () => {
    this.props.functions?.getLectureTypes();
  };

  render() {

    const { status, lectures, lecturesTypes, lectureTypeSelected } = this.props;

    const getElement = {
      [ServiceStatus.noAction]: <View/>,
      [ServiceStatus.noInternetConnection]:
        <LecturesPageWarningMessage
          hasNoInternetConnection={true}
          onPress={this.getLectureType}
        />,
      [ServiceStatus.exception]:
        <LecturesPageWarningMessage
          hasException={true}
          onPress={this.getLectureType}
        />,
      [ServiceStatus.loading]:
        <ListLecture loading={true}/>,
      [ServiceStatus.success]:
        <ListLecture
          lectures={lectures!}
          types={lecturesTypes!}
          selectedType={lectureTypeSelected!}
          listEmptyComponent={<LecturesPageWarningMessage hasEmptyList={true}/>}
        />,
    };

    return (
      <Container>
        { getElement[status!] }
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
