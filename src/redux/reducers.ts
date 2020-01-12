import {combineReducers} from 'redux';
import {LecturesPageReducer} from "../pages/lectures/view/redux/lectures-page-reducer";
import {LecturesPageModel} from "../pages/lectures/view/model";

export interface StatesReducers {
  lecturesPageInitialState: LecturesPageModel.Props
}

export const Reducers = combineReducers({
  lecturesPageInitialState: LecturesPageReducer
});
