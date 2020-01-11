import React, {Component} from "react";
import {Text, View} from "react-native";

export class LecturePage extends Component {

  componentWillUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void {
    console.log("aa");
  }

  render = () => {

    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>Hello World</Text>
      </View>
    )

  }

}
