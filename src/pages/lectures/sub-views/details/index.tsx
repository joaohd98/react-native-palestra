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
import {Routes} from "../../../../routes/routes";
import {LectureDetailsConst} from "./constants";
import {Alert} from "react-native";

export class LectureDetails extends Component<LectureDetailsPageModel.Props> {

  static navigationOptions = LectureDetailsPageHeader;

  componentDidUpdate(prevProps: Readonly<LectureDetailsPageModel.Props>, prevState: Readonly<{}>, snapshot?: any): void {

    const {
      alertTitle,
      alertMessage,
      alertButtonText
    } = LectureDetailsConst;

    if(!prevProps.hasSubscribe && this.props.hasSubscribe) {
      Alert.alert(alertTitle, alertMessage, [{text: alertButtonText}]);
    }
  }

  goToSubscribe = () => {
    const {lecture, type, functions, navigation} = this.props;
    functions?.sendParamsSubscription(lecture!, type!);
    navigation?.navigate(Routes.lectureSubscription);
  };

  render = () => {

    const { lecture, type, navigation, subscription, hasSubscribe} = this.props;

    return (
      <ContainerScroll>
        <SubHeaderDetailsLectureComponent lecture={lecture!} type={type!}/>
        <LectureDetailsPageDescription lecture={lecture!}/>
        { (subscription || lecture?.QtdVagasDisponiveis! === 0)
          ? <LectureDetailsPageFooterInformation
              subscription={subscription!}
              lecture={lecture!}
              navigation={navigation!}
            />
          : <LectureDetailsPageFooterSubscribe
              navigation={navigation!}
              hasSubscribe={hasSubscribe!}
              goToSubscribe={this.goToSubscribe}
          />
        }
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
