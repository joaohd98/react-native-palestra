import React, {Component} from "react";
import {Animated} from "react-native";
import {Colors} from "../../../theme/colors";
import {ListLectureCardLoadingStyles} from "./styles";

interface State {
  skeletonAnimation: Animated.Value;
}

export class ListLectureCardLoading extends Component<any, State> {

  state = {
    skeletonAnimation: new Animated.Value(1)
  };

  componentDidMount = () => {

    Animated.loop(
      Animated.timing(this.state.skeletonAnimation, {
        toValue: 300,
        duration: 3000
      })
    ).start();

  };

  render = () => {

    const {
      CardView,
      CardContent,
      CardDescriptionContent,
      CardLogo,
      CardText,
      CardTextLast,
      CardFooterContent,
      CardFooterButton,
      CardFooterText,
    } = ListLectureCardLoadingStyles;

    const styles = {
      backgroundColor: this.state.skeletonAnimation.interpolate({
        inputRange: [1, 50, 100, 150, 200, 250, 300],
        outputRange: Colors.skeleton,
      })
    };

    return (
      <CardView>
        <CardContent>
          <CardLogo source={{}} resizeMode={'stretch'}/>
          <CardDescriptionContent>
            <CardText style={styles}/>
            <CardText style={styles}/>
            <CardText style={styles}/>
            <CardTextLast style={styles}/>
            <CardFooterContent>
              <CardFooterButton>
                <CardFooterText style={styles}/>
              </CardFooterButton>
            </CardFooterContent>
          </CardDescriptionContent>
        </CardContent>
      </CardView>
    )

  };


}
