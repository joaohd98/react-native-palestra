import React from 'react';
import {createAppContainer} from "react-navigation";
import {CreateStackNavigator} from "../routes/stack-navigator";
import {LecturePage} from "../pages/lectures";

const getAppContainer = () => (
  createAppContainer(CreateStackNavigator([
    LecturePage
  ]))
);

export const Layout = () => {

  const AppContainer = getAppContainer();

  return (
    <AppContainer/>
  );

};
