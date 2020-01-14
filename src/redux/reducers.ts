import {combineReducers} from 'redux';
import {LecturesPageReducer} from "../pages/lectures/view/redux/lectures-page-reducer";
import {LecturesPageModel} from "../pages/lectures/view/model";
import {SideMenuModel} from "../layout/side-menu/model";
import {SideMenuReducer} from "../layout/side-menu/redux/side-menu-reducer";
import {MySubscriptionsPageReducer} from "../pages/my-subscriptions/view/redux/my-subscriptions-reducer";
import {MySubscriptionsPageModel} from "../pages/my-subscriptions/view/model";
import {LectureSubscriptionPageModel} from "../pages/lectures/sub-views/subscription/model";
import {LectureSubscriptionPageReducer} from "../pages/lectures/sub-views/subscription/redux/lectures-subscription-reducer";

export interface StatesReducers {
  lecturesPageInitialState: LecturesPageModel.Props,
  lectureSubscriptionPageInitialState: LectureSubscriptionPageModel.Props,
  sideMenuInitialState: SideMenuModel.Props,
  mySubscriptionsPageReducer: MySubscriptionsPageModel.Props
}

export const Reducers = combineReducers({
  lecturesPageInitialState: LecturesPageReducer,
  lectureSubscriptionPageInitialState: LectureSubscriptionPageReducer,
  sideMenuInitialState: SideMenuReducer,
  mySubscriptionsPageReducer: MySubscriptionsPageReducer
});
