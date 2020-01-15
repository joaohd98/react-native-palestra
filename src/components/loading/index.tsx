import React, {Component} from "react";
import {LoadingComponentStyles} from "./styles";
import {LoadingComponentConst} from "./constants";

interface Props {
  text?: string,
  isVisible: boolean
}

export class LoadingComponent extends Component<Props> {

  render = () => {

    const {
      text,
      isVisible
    } = this.props;

    const {
      defaultText
    } = LoadingComponentConst;

    const {
      View,
      Container,
      Spinner,
      Text
    } = LoadingComponentStyles;

    return (
      isVisible ?
        <View>
          <Container>
            <Spinner size="large"/>
            <Text>{ text ? text : defaultText }</Text>
          </Container>
        </View>
      : <></>
    )


  }

}
