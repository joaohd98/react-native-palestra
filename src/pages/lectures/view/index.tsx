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
import {Routes} from "../../../routes/routes";
import {LectureResponseModel} from "../../../services/lectures/model";
import {SubscribeResponseModel} from "../../../services/my-subscriptions/model";

export class Lecture extends Component<LecturesPageModel.Props> {

  static navigationOptions = LecturesPageHeader;

  componentDidMount = () => {
    this.getLectureSubscriptionsTypes();
  };

  getLectureSubscriptionsTypes = () => {
    this.props.functions?.getLectureSubscriptionsTypes();
  };

  isSubscribe(subscription: SubscribeResponseModel, lecture: LectureResponseModel): boolean {

    const { email } = this.props;

    return subscription.CodigoPalestra === lecture.Codigo && subscription.Email === email

  }

  sendDetails = (lecture: LectureResponseModel) => {

    const { types, navigation, functions, subscriptions } = this.props;

    functions?.sendParamsDetails(
      lecture,
      types?.find(type => type.Codigo === lecture.CodigoTipoCategoria)!,
      subscriptions?.find(subscription => this.isSubscribe(subscription, lecture))!
    );

    navigation?.navigate(Routes.lecturesDetails);

  };

  render() {

    const { status, lectures, types, typeSelected } = this.props;

    const getElement = {
      [ServiceStatus.noAction]: <View/>,
      [ServiceStatus.noInternetConnection]:
        <LecturesPageWarningMessage
          hasNoInternetConnection={true}
          onPress={this.getLectureSubscriptionsTypes}
        />,
      [ServiceStatus.exception]:
        <LecturesPageWarningMessage
          hasException={true}
          onPress={this.getLectureSubscriptionsTypes}
        />,
      [ServiceStatus.loading]:
        <ListLecture loading={true}/>,
      [ServiceStatus.success]:
        <ListLecture
          lectures={lectures!}
          types={types!}
          onPressSeeMore={lecture => this.sendDetails(lecture)}
          selectedType={typeSelected!}
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
  return {
    ...state.lecturesPageInitialState,
    email: state.lectureSubscriptionPageInitialState.email
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  functions: bindActionCreators(LecturesPageInitialState.functions!, dispatch)
});

export const LecturePage = connect(mapStateToProps, mapDispatchToProps)(Lecture);
