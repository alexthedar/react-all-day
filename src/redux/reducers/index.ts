import { combineReducers } from "redux";
import { reducer as counter, State as CounterState } from "./counter";
import { reducer as loading, State as LoadingState } from "./loading";
import {
  reducer as breadcrumbs,
  State as BreadcrumbState
} from "./breadcrumbs";

export interface RootState {
  counter: CounterState;
  loading: LoadingState;
  breadcrumbs: BreadcrumbState;
}

export const rootReducer = combineReducers<RootState>({
  counter,
  loading,
  breadcrumbs
});
