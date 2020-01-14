import React, {Component} from "react";
import {LectureSubscriptionPageModel} from "./model";
import {StatesReducers} from "../../../../redux/reducers";
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import {LectureSubscriptionPageInitialState} from "./redux/lectures-subscription-reducer";
import {LectureSubscriptionPageHeader} from "./components/header";
import {ContainerScroll} from "../../../../theme/components";
import {LectureSubscriptionPageFooterButtons} from "./components/footer-buttons";
import {LectureSubscriptionPageInputName} from "./components/input-name";
import {LectureSubscriptionPageInputEmail} from "./components/input-email";
import {LectureSubscriptionPageInputCompany} from "./components/input-company";
import {LectureSubscriptionPageInputRole} from "./components/input-role";
import {Text} from "react-native";
import {SubHeaderDetailsLectureComponent} from "../../../../components/sub-header-details-lecture";

export class LectureSubscription extends Component<LectureSubscriptionPageModel.Props, LectureSubscriptionPageModel.State> {

  static navigationOptions = LectureSubscriptionPageHeader;

  state = {
    name: { value: "", valid: false},
    mail: { value: "", valid: false},
    company: {value: "", valid: false },
    role: { value: "", valid: false },
  };

  render = () => {

    const {lecture, type} = this.props;

    return (
      <ContainerScroll keyboardShouldPersistTaps="handled">
        <SubHeaderDetailsLectureComponent lecture={lecture!} type={type!}/>
        <LectureSubscriptionPageInputName
          changeValue={(value, valid) => this.setState({name: {value, valid}}) }
        />
        <LectureSubscriptionPageInputEmail
          changeValue={(value, valid) => this.setState({mail: {value, valid}}) }
        />
        <LectureSubscriptionPageInputCompany
          changeValue={(value, valid) => this.setState({company: {value, valid}}) }
        />
        <LectureSubscriptionPageInputRole
          changeValue={(value, valid) => this.setState({role: {value, valid}}) }
        />
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
