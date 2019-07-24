import { IS_LOADING } from "../constants";
import { PayloadAction } from "./interfaces";

export interface IsLoadingAction extends PayloadAction<boolean> {
  type: typeof IS_LOADING;
}

export type LoadingAction = IsLoadingAction;

export const actionCreators = {
  isLoading(isLoading: boolean = false): IsLoadingAction {
    return { payload: isLoading, type: IS_LOADING };
  }
};
