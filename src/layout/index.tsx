import React from 'react';
import {createAppContainer} from "react-navigation";
import {CreateDrawerNavigator} from "../routes/drawer-navigator";
import {SideMenuComponent} from "./side-menu";
import {LecturePage} from "../pages/lectures/view";
import {LectureDetailsPage} from "../pages/lectures/sub-views/details";
import {LectureSubscriptionPage} from "../pages/lectures/sub-views/realize-subscription";
import {MySubscriptionsPage} from "../pages/my-subscriptions/view";
import {Provider} from "react-redux";
import {store} from "../redux/store";

export const Layout = () => {

  const drawerNavigator = CreateDrawerNavigator( [
    LecturePage,
    LectureDetailsPage,
    LectureSubscriptionPage,
    MySubscriptionsPage,
  ], SideMenuComponent);

  const Layout = createAppContainer(drawerNavigator);

  return (
    <Provider store={store}>
      <Layout/>
    </Provider>
  );

};
