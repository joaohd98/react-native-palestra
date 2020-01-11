import {ComponentType} from "react";
import {createDrawerNavigator} from "react-navigation-drawer";
import {DrawerContentComponentProps} from "react-navigation-drawer/lib/typescript/src/types";
import {CreateStackNavigator} from "./stack-navigator";

export const CreateDrawerNavigator = (pages: Function[], contentComponent: ComponentType<DrawerContentComponentProps>) => {

  const routes: { [key: string]: any } = {};

  pages.forEach(page => routes[page.name] = CreateStackNavigator(page));

  return createDrawerNavigator(routes, {
    contentComponent,
  });

};
