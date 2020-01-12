import {combineReducers} from 'redux';
import {LecturesPageModel} from "../pages/lectures/view/providers/lectures-page-model";
import {LecturesPageReducer} from "../pages/lectures/view/redux/lectures-page-reducer";

export interface StatesReducers {
  lecturesPageInitialState: LecturesPageModel.Props
}

export const Reducers = combineReducers({
  lecturesPageInitialState: LecturesPageReducer
});
