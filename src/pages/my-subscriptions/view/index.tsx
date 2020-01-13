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

export class MySubscriptions extends Component<MySubscriptionsPageModel.Props> {

  static navigationOptions = MySubscriptionsPageHeader;

  componentDidMount = () => {
    this.callLecturesTypesSubscriptions();
  };

  callLecturesTypesSubscriptions = () => {
    this.props.functions?.getLecturesTypesSubscriptions();
  };

  render = () => {

    const { lectures, types, subscriptions, status } = this.props;

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
          listFooterComponent={<MySubscriptionsPageFooterButton/>}
        />,
      [ServiceStatus.success]:
        <ListLecture
          lectures={lectures!}
          types={types!}
          ruleShowLecture={(lecture => subscriptions!.find(subscription => subscription.CodigoPalestra == lecture.Codigo) != undefined)}
          listEmptyComponent={<MySubscriptionsPageWarningMessage hasEmptyList={true}/>}
          listFooterComponent={<MySubscriptionsPageFooterButton/>}
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
