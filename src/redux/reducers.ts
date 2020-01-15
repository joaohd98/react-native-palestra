import {combineReducers} from 'redux';
import {LecturesPageReducer} from "../pages/lectures/view/redux/lectures-page-reducer";
import {LecturesPageModel} from "../pages/lectures/view/model";
import {SideMenuModel} from "../layout/side-menu/model";
import {SideMenuReducer} from "../layout/side-menu/redux/side-menu-reducer";
import {MySubscriptionsPageReducer} from "../pages/my-subscriptions/view/redux/my-subscriptions-reducer";
import {MySubscriptionsPageModel} from "../pages/my-subscriptions/view/model";
import {LectureSubscriptionPageModel} from "../pages/lectures/sub-views/subscription/model";
import {LectureSubscriptionPageReducer} from "../pages/lectures/sub-views/subscription/redux/lectures-subscription-reducer";
import {LectureDetailsPageModel} from "../pages/lectures/sub-views/details/model";
import {LectureDetailsPageReducer} from "../pages/lectures/sub-views/details/redux/lecture-details-reducer";
import {persistReducer} from "redux-persist";
import AsyncStorage from '@react-native-community/async-storage';

export interface StatesReducers {
  lecturesPageInitialState: LecturesPageModel.Props,
  lectureSubscriptionPageInitialState: LectureSubscriptionPageModel.Props,
  lectureDetailsPageInitialState: LectureDetailsPageModel.Props
  sideMenuInitialState: SideMenuModel.Props,
  mySubscriptionsInitialState: MySubscriptionsPageModel.Props
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['email']
};

const lectureSubscriptionPersistedReducer = persistReducer(persistConfig, LectureSubscriptionPageReducer);

export const Reducers = combineReducers({
  lecturesPageInitialState: LecturesPageReducer,
  lectureSubscriptionPageInitialState: lectureSubscriptionPersistedReducer,
  lectureDetailsPageInitialState: LectureDetailsPageReducer,
  sideMenuInitialState: SideMenuReducer,
  mySubscriptionsInitialState: MySubscriptionsPageReducer,
});
