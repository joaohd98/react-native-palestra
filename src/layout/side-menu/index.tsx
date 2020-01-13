import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import {TouchableOpacity} from "react-native";
import {SideMenuComponentStyles} from "./styles";
import {StatesReducers} from "../../redux/reducers";
import {SideMenuInitialState} from "./redux/side-menu-reducer";
import {SideMenuModel} from "./model";
import {Routes} from "../../routes/routes";
import {DrawerContentComponentProps} from "react-navigation-drawer/lib/typescript/src/types";
import {SideMenuConst} from "./constants";
import {LectureTypeResponseModel} from "../../services/lectures/model";

interface Props extends DrawerContentComponentProps, SideMenuModel.Props {}

export class SideMenuPure extends Component<Props> {

  getListFilter = (): JSX.Element => {

    const {
      lectureTypes
    } = this.props;

    const {
      ViewSubList,
      ViewList,
      TextListTitle,
      TextLink,
    } = SideMenuComponentStyles;

    const {
      filterTitle,
      filterAll,
    } = SideMenuConst;

    let elements: JSX.Element[] = [];

    if(lectureTypes?.length === 0)
      return <></>;

    for(let type of lectureTypes!) {

      elements.push(
        <ViewSubList key={type.Codigo}>
          <TouchableOpacity onPress={() => this.changeFilter(type)}>
            <TextLink>
              { type.Descricao }
            </TextLink>
          </TouchableOpacity>
        </ViewSubList>
      )

    }

    return (
      <ViewList>
        <TextListTitle>
          { filterTitle }
        </TextListTitle>
        <ViewSubList>
          <TouchableOpacity onPress={() => this.changeFilter(null)}>
            <TextLink>
              { filterAll }
            </TextLink>
          </TouchableOpacity>
        </ViewSubList>
        { elements }
      </ViewList>
    )

  };

  goMySubscriptions = () => {
    this.props.navigation.navigate(Routes.mySubscriptions);
    this.props.navigation.closeDrawer();
  };

  changeFilter = (type: LectureTypeResponseModel | null) => {

    this.props.functions?.changeLectureFilter(type!);
    this.props.navigation.navigate(Routes.lectures);
    this.props.navigation.closeDrawer();

  };

  render = () => {

    const {
      navigation
    } = this.props;

    const {
      View,
      ViewIcon,
      Icon,
      TextLink,
    } = SideMenuComponentStyles;

    const {
      mySubscriptions
    } = SideMenuConst;

    return (
      <View>
        <ViewIcon onPress={navigation.closeDrawer}>
          <Icon name="close" />
        </ViewIcon>
        { this.getListFilter() }
        <TouchableOpacity onPress={this.goMySubscriptions}>
          <TextLink>{ mySubscriptions }</TextLink>
        </TouchableOpacity>
      </View>
    )

  }

}

const mapStateToProps = (state: StatesReducers) => {
  return state.sideMenuInitialState
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  functions: bindActionCreators(SideMenuInitialState.functions!, dispatch)
});

export const SideMenu = connect(mapStateToProps, mapDispatchToProps)(SideMenuPure);
