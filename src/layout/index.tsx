import React from 'react';
import {createAppContainer} from "react-navigation";
import {CreateStackNavigator} from "../routes/stack-navigator";
import {LecturePage} from "../pages/lectures";
import {SideMenuComponent} from "./side-menu";
import SideMenu from 'react-native-side-menu';

const getAppContainer = () => (
  createAppContainer(CreateStackNavigator([
    LecturePage
  ]))
);

export const Layout = () => {

  const menu = <SideMenuComponent />;
  const AppContainer = getAppContainer();

  return (
    <SideMenu menu={menu} isOpen={true}>
      <AppContainer/>
    </SideMenu>
  );

};
