import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from './reducers/loginReducer';

const rootReducer = combineReducers({
  loginReducer,
});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
export type RootState = ReturnType<typeof rootReducer>;
