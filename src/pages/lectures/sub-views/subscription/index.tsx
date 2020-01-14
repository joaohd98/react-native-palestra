import React, {Component} from "react";
import {LectureSubscriptionPageModel} from "./model";
import {StatesReducers} from "../../../../redux/reducers";
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import {LectureSubscriptionPageInitialState} from "./redux/lectures-subscription-reducer";
import {LectureSubscriptionPageHeader} from "./components/header";
import {Container} from "../../../../theme/components";
import {LectureSubscriptionPageFooterButtons} from "./components/footer-buttons";
import {SubHeaderDetailsLectureComponent} from "../../../../components/sub-header-details-lecture";

export class LectureSubscription extends Component<LectureSubscriptionPageModel.Props> {

  static navigationOptions = LectureSubscriptionPageHeader;

  render = () => {

    return (
      <Container>
        <SubHeaderDetailsLectureComponent/>
        <LectureSubscriptionPageFooterButtons/>
      </Container>
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
