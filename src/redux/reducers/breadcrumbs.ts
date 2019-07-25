import { BreadcrumbAction } from "../actions/breadcrumbs";
import { SET_BREADCRUMBS } from "../constants";

export type State = Readonly<{
  breadcrumbs: number[];
}>;

export const initialState: State = {
  breadcrumbs: []
};

export const reducer = (
  state = initialState,
  action: BreadcrumbAction
): State => {
  switch (action.type) {
    case SET_BREADCRUMBS:
      return { ...state, breadcrumbs: action.payload };
    default:
      return state;
  }
};
