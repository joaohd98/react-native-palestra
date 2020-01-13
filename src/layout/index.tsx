import React from 'react';
import {createAppContainer} from "react-navigation";
import {CreateDrawerNavigator} from "../routes/drawer-navigator";
import {SideMenu} from "./side-menu";
import {LecturePage} from "../pages/lectures/view";
import {Provider} from "react-redux";
import {store} from "../redux/store";
import {MySubscriptionsPage} from "../pages/my-subscriptions/view";
import {LectureSubscriptionPage} from "../pages/lectures/sub-views/realize-subscription";
import {LectureDetailsPage} from "../pages/lectures/sub-views/details";
import {CreateStackNavigator} from "../routes/stack-navigator";
import {Routes} from "../routes/routes";

export const Layout = () => {

  const drawerNavigator = CreateDrawerNavigator(
    CreateStackNavigator([
      { name: Routes.lectures, page: LecturePage },
      { name: Routes.lectureSubscription, page: LectureSubscriptionPage },
      { name: Routes.lecturesDetails, page: LectureDetailsPage },
      { name: Routes.mySubscriptions, page: MySubscriptionsPage },
    ])
  , SideMenu);

  const Layout = createAppContainer(drawerNavigator);

  return (
    <Provider store={store}>
      <Layout/>
    </Provider>
  );

};
