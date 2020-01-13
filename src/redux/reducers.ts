import {combineReducers} from 'redux';
import {LecturesPageReducer} from "../pages/lectures/view/redux/lectures-page-reducer";
import {LecturesPageModel} from "../pages/lectures/view/model";
import {SideMenuModel} from "../layout/side-menu/model";
import {SideMenuReducer} from "../layout/side-menu/redux/side-menu-reducer";
import {MySubscriptionsPageReducer} from "../pages/my-subscriptions/view/redux/my-subscriptions-reducer";
import {MySubscriptionsPageModel} from "../pages/my-subscriptions/view/model";

export interface StatesReducers {
  lecturesPageInitialState: LecturesPageModel.Props,
  sideMenuInitialState: SideMenuModel.Props,
  mySubscriptionsPageReducer: MySubscriptionsPageModel.Props
}

export const Reducers = combineReducers({
  lecturesPageInitialState: LecturesPageReducer,
  sideMenuInitialState: SideMenuReducer,
  mySubscriptionsPageReducer: MySubscriptionsPageReducer
});
