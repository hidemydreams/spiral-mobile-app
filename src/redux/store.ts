import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from './reducers/loginReducer';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['loginReducer'],
};

const rootReducer = combineReducers({
  loginReducer,
});

const persitedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () =>
  createStore(persitedReducer, applyMiddleware(thunk));

export default configureStore;
export type RootState = ReturnType<typeof rootReducer>;
