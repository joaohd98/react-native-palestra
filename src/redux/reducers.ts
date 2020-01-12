import {combineReducers} from 'redux';
import {LecturesPageReducer} from "../pages/lectures/view/redux/lectures-page-reducer";
import {LecturesPageModel} from "../pages/lectures/view/model";
import {SideMenuModel} from "../layout/side-menu/model";
import {SideMenuReducer} from "../layout/side-menu/redux/side-menu-reducer";

export interface StatesReducers {
  lecturesPageInitialState: LecturesPageModel.Props,
  sideMenuInitialState: SideMenuModel.Props
}

export const Reducers = combineReducers({
  lecturesPageInitialState: LecturesPageReducer,
  sideMenuInitialState: SideMenuReducer
});
