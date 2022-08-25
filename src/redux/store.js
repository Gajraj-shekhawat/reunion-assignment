import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { favoriteReducer } from "./favorite/reducer";
import { propertyReducer } from "./property/reducer";

const rootReducer = combineReducers({
property:propertyReducer,
favorite:favoriteReducer
});
const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
