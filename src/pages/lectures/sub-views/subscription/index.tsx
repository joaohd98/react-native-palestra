import React, {Component} from "react";
import {LectureSubscriptionPageModel} from "./model";
import {StatesReducers} from "../../../../redux/reducers";
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import {LectureSubscriptionPageInitialState} from "./redux/lectures-subscription-reducer";
import {LectureSubscriptionPageHeader} from "./components/header";
import {ContainerScroll} from "../../../../theme/components";
import {LectureSubscriptionPageFooterButtons} from "./components/footer-buttons";
import {SubHeaderDetailsLectureComponent} from "../../../../components/sub-header-details-lecture";
import {InputComponent} from "../../../../components/input";
import {LectureSubscriptionPageInputName} from "./components/input-name";
import {LectureSubscriptionPageFormContainer} from "./components/form-container";

export class LectureSubscription extends Component<LectureSubscriptionPageModel.Props> {

  static navigationOptions = LectureSubscriptionPageHeader;

  render = () => {

    return (
      <ContainerScroll keyboardShouldPersistTaps="handled">
        <SubHeaderDetailsLectureComponent/>
        <LectureSubscriptionPageFormContainer/>
        <LectureSubscriptionPageFooterButtons/>
      </ContainerScroll>
    )

  }

}

const mapStateToProps = (state: StatesReducers) => {
  return state.lectureSubscriptionPageInitialState;
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  functions: bindActionCreators(LectureSubscriptionPageInitialState.functions!, dispatch)
});

export const LectureSubscriptionPage = connect(mapStateToProps, mapDispatchToProps)(LectureSubscription);
