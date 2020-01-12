import React, {Component} from 'react';
import {
  Animated, ImageProps,
} from 'react-native';
import {Colors} from '../../theme/colors';
import {ProgressiveImageComponentStyles} from './styles';

interface State {
  skeletonAnimation: Animated.Value;
}

export class ProgressiveImageComponent extends Component<ImageProps, State> {

  state = {
    skeletonAnimation: new Animated.Value(1),
  };

  componentDidMount = () => {

    Animated.loop(
      Animated.timing(this.state.skeletonAnimation, {
        toValue: 300,
        duration: 3000
      })
    ).start();

  };

  onLoadEnd = () => {

    Animated.timing(this.state.skeletonAnimation, {
      toValue: 300,
      duration: 3000
    }).stop();

  };

  render = () => {

    const { Image } = ProgressiveImageComponentStyles;
    const { style } = this.props;

    const animation = {
      backgroundColor: this.state.skeletonAnimation.interpolate({
        inputRange: [1, 50, 100, 150, 200, 250, 300],
        outputRange: Colors.skeleton,
      }),
    };

    return <Image
      {...this.props}
      onLoad={this.onLoadEnd}
      style={[style, { ...animation }]}
    />;

  }

}
