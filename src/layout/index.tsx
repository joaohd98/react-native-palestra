import React from 'react';
import {createAppContainer} from "react-navigation";
import {CreateDrawerNavigator} from "../routes/drawer-navigator";
import {SideMenu} from "./side-menu";
import {LecturePage} from "../pages/lectures/view";
import {Provider} from "react-redux";
import {store} from "../redux/store";
import {MySubscriptionsPage} from "../pages/my-subscriptions/view";

export const Layout = () => {

  const drawerNavigator = CreateDrawerNavigator( [
    LecturePage,
   // LectureDetailsPage,
   // LectureSubscriptionPage,
   //MySubscriptionsPage,
  ], SideMenu);

  const Layout = createAppContainer(drawerNavigator);

  return (
    <Provider store={store}>
      <Layout/>
    </Provider>
  );

};
