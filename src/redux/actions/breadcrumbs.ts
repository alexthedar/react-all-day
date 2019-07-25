import { Action } from "redux";
import { GET_BREADCRUMBS, SET_BREADCRUMBS } from "../constants";
import { PayloadAction, ThunkAction } from "./interfaces";
import { Server } from "../../Server";

export interface GetBreadcrumbsAction extends PayloadAction<number[]> {
  type: typeof GET_BREADCRUMBS;
}

export interface SetBreadcrumbsAction extends PayloadAction<number[]> {
  type: typeof SET_BREADCRUMBS;
}

export type BreadcrumbAction = GetBreadcrumbsAction | SetBreadcrumbsAction;

export const actionCreators = {
  getNumbers(): ThunkAction<Promise<Action>> {
    return async dispatch => {
      const breadcrumbs = await Server.getStuff();
      return dispatch(actionCreators.setBreadcrumbs(breadcrumbs));
    };
  },
  setBreadcrumbs(breadcrumbs: number[]): SetBreadcrumbsAction {
    return { payload: breadcrumbs, type: SET_BREADCRUMBS };
  }
};

