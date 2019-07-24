import { BreadcrumbAction } from "../actions/breadcrumbs";
import { GET_BREADCRUMBS } from "../constants";

export type State = Readonly<{
  breadcrumbs: [];
}>;

export const initialState: State = {
  breadcrumbs: []
};

export const reducer = (
  state = initialState,
  action: BreadcrumbAction
): State => {
  switch (action.type) {
    case GET_BREADCRUMBS:
      return { ...state, breadcrumbs: action.payload };
    default:
      return state;
  }
};
