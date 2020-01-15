import React from 'react';
import {createAppContainer} from "react-navigation";
import {CreateDrawerNavigator} from "../routes/drawer-navigator";
import {SideMenu} from "./side-menu";
import {LecturePage} from "../pages/lectures/view";
import {Provider} from "react-redux";
import {persistor, store} from "../redux/store";
import {MySubscriptionsPage} from "../pages/my-subscriptions/view";
import {LectureDetailsPage} from "../pages/lectures/sub-views/details";
import {CreateStackNavigator} from "../routes/stack-navigator";
import {Routes} from "../routes/routes";
import {LectureSubscriptionPage} from "../pages/lectures/sub-views/subscription";
import {PersistGate} from "redux-persist/integration/react";

export const Layout = () => {

  const drawerNavigator = CreateDrawerNavigator(
    CreateStackNavigator([
      { name: Routes.lectures, page: LecturePage },
      { name: Routes.lecturesDetails, page: LectureDetailsPage },
      { name: Routes.lectureSubscription, page: LectureSubscriptionPage },
      { name: Routes.mySubscriptions, page: MySubscriptionsPage },
    ])
  , SideMenu);

  const Layout = createAppContainer(drawerNavigator);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout/>
      </PersistGate>
    </Provider>
  );

};
