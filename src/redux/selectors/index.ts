import { createSelector } from "reselect";
import { RootState } from "../reducers";

const getBreadcrumbs = (state: RootState) => state.breadcrumbs;

export const filterBreadcrumbs = createSelector(
  getBreadcrumbs,
  breadcrumbs => {
    console.log(breadcrumbs);
    return breadcrumbs;
  }
);

// breadcrumbs.filter((item: number) => item > 0.5)
// // breadcrumbs => console.log(breadcrumbs)
// //breadcrumbs: => breadcrumbs.filter((item: number) => item > 0.5)
