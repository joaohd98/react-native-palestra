import React, {Component} from "react";
import {View} from "react-native";
import {StatesReducers} from "../../../redux/reducers";
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import {MySubscriptionsInitialState} from "./redux/my-subscriptions-reducer";
import {MySubscriptionsPageModel} from "./model";
import {MySubscriptionsPageHeader} from "./components/header";
import {ServiceStatus} from "../../../services/model";
import {ListLecture} from "../../../components/list-lectures/list";
import {Container} from "../../../theme/components";
import {MySubscriptionsPageFooterButton} from "./components/footer-button";
import {MySubscriptionsPageWarningMessage} from "./components/warning-message";
import {LectureResponseModel} from "../../../services/lectures/model";
import {Routes} from "../../../routes/routes";

export class MySubscriptions extends Component<MySubscriptionsPageModel.Props> {

  static navigationOptions = MySubscriptionsPageHeader;

  componentDidMount = () => {
    this.callLecturesTypesSubscriptions();
  };

  callLecturesTypesSubscriptions = () => {
    this.props.functions?.getLecturesTypesSubscriptions();
  };

  sendDetails = (lecture: LectureResponseModel) => {

    const { types, navigation, functions, subscriptions } = this.props;

    functions?.sendParamsDetails(
      lecture,
      types?.find(type => type.Codigo === lecture.CodigoTipoCategoria)!,
      subscriptions?.find(subscription => subscription.CodigoPalestra === lecture.Codigo)!
    );

    navigation?.navigate(Routes.lecturesDetails);

  };


  render = () => {

    const { lectures, types, subscriptions, status, navigation } = this.props;

    const getElement = {
      [ServiceStatus.noAction]: <View/>,
      [ServiceStatus.exception]:
        <MySubscriptionsPageWarningMessage
          hasException={true}
          onPress={this.callLecturesTypesSubscriptions}
        />,
      [ServiceStatus.noInternetConnection]:
        <MySubscriptionsPageWarningMessage
          hasNoInternetConnection={true}
          onPress={this.callLecturesTypesSubscriptions}
        />,
      [ServiceStatus.loading]:
        <ListLecture
          loading={true}
          listFooterComponent={<MySubscriptionsPageFooterButton navigation={navigation!}/>}
        />,
      [ServiceStatus.success]:
        <ListLecture
          lectures={lectures!}
          types={types!}
          onPressSeeMore={lecture => this.sendDetails(lecture)}
          ruleShowLecture={(lecture => subscriptions!.find(subscription => subscription.CodigoPalestra == lecture.Codigo) != undefined)}
          listEmptyComponent={<MySubscriptionsPageWarningMessage hasEmptyList={true}/>}
          listFooterComponent={<MySubscriptionsPageFooterButton navigation={navigation!}/>}
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
  return state.mySubscriptionsPageReducer;
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  functions: bindActionCreators(MySubscriptionsInitialState.functions!, dispatch)
});

export const MySubscriptionsPage = connect(mapStateToProps, mapDispatchToProps)(MySubscriptions);
