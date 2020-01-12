import React, {Component} from "react";
import {Animated, ScrollView} from "react-native";
import {Colors} from "../../../../../theme/colors";
import {LecturesPageCardStyles} from "../card/styles";
import {LecturesPageListLoadingStyles} from "./styles";

interface State {
  skeletonAnimation: Animated.Value;
}


export class LecturesPageListLoading extends Component<any, State> {

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

  renderCard = (key: number): JSX.Element => {

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
    } = LecturesPageListLoadingStyles;

    const styles = {
      backgroundColor: this.state.skeletonAnimation.interpolate({
        inputRange: [1, 50, 100, 150, 200, 250, 300],
        outputRange: Colors.skeleton,
      })
    };

    return (
      <CardView key={key}>
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

  render = () => {

    let cards: JSX.Element[] = [];

    for(let i = 0; i < 10; i++)
      cards.push(this.renderCard(i));

    return (
      <ScrollView scrollEnabled={false}>
        { cards }
      </ScrollView>
    );

  }

}
