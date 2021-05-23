import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from './reducers/loginReducer';
import profileReducer from './reducers/profileReducer';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['loginReducer', 'profileReducer'],
};

const rootReducer = combineReducers({
  loginReducer,
  profileReducer,
});

const persitedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () =>
  createStore(persitedReducer, applyMiddleware(thunk));

export const store = configureStore();
export const persistedStore = persistStore(store);

export default configureStore;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
