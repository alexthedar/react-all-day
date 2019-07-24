import * as Bluebird from "bluebird";
import { INCREMENT } from "../constants";
import { PayloadAction, ThunkAction } from "./interfaces";
import { actionCreators as loadingActions } from "./loading";

export interface IncrementAction extends PayloadAction<number> {
  type: typeof INCREMENT;
}

export type CounterAction = IncrementAction;

export const actionCreators = {
  delayIncrement(amount: number = 1): ThunkAction<Bluebird<void>> {
    return dispatch => {
      dispatch(loadingActions.isLoading(true));
      return Bluebird.delay(1000).then(() => {
        dispatch(actionCreators.increment(amount));
        dispatch(loadingActions.isLoading(false));
      });
    };
  },

  increment(amount: number = 1): IncrementAction {
    return { payload: amount, type: INCREMENT };
  }
};
