import React, {Component} from "react";
import {Text, View} from "react-native";
import {connect} from 'react-redux';
import {StatesReducers} from "../../../redux/reducers";
import {bindActionCreators, Dispatch} from "redux";
import {LecturesPageInitialState} from "./redux/lecture-page-reducer";
import Config from 'react-native-config';

export class Lecture extends Component<any, {navigaton: any}> {

  render = () => {

    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>{ Config.API_URL }</Text>
      </View>
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
