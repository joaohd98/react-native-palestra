import {applyMiddleware, createStore, Store} from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import {Reducers} from './reducers';
import {rootSaga, sagaMiddleware} from './saga';
import {AsyncStorage} from 'react-native';

const store: Store = createStore(Reducers, applyMiddleware(
  sagaMiddleware,
));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export {
  store,
  persistor
};
