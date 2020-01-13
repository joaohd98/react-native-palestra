import {ComponentType} from "react";
import {createDrawerNavigator} from "react-navigation-drawer";
import {DrawerContentComponentProps} from "react-navigation-drawer/lib/typescript/src/types";

export const CreateDrawerNavigator = (page: Function, contentComponent: ComponentType<DrawerContentComponentProps>) => {

  const route: { [key: string]: any } = {
    [page.name]: page
  };

  return createDrawerNavigator(route, {
    contentComponent,
  });

};
