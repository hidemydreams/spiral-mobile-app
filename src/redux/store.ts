import { combineReducers, createStore } from 'redux';
import loginReducer from './reducers/loginReducer';

const rootReducer = combineReducers({
  loginReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
export type RootState = ReturnType<typeof rootReducer>;
