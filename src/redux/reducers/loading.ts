import { LoadingAction } from "../actions/loading";
import { IS_LOADING } from "../constants";

export type State = Readonly<{
  isLoading: boolean;
}>;

export const initialState: State = {
  isLoading: false
};

export const reducer = (state = initialState, action: LoadingAction): State => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
