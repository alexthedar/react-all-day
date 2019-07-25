import { createSelector } from "reselect";
import { RootState } from "../reducers";

const getBreadcrumbs = (state: RootState) => state.breadcrumbs.breadcrumbs;

export const filterBreadcrumbs = createSelector(
  getBreadcrumbs,
  breadcrumbs => breadcrumbs.filter((item: number) => item < 0.5)
);

