import * as React from "react";
import { connect } from "react-redux";
import "./App.css";
import { RootState } from "./redux/reducers";
import { counterActions, RootAction } from "./redux/actions";
import { ThunkDispatch } from "redux-thunk";
import { filterBreadcrumbs } from "./redux/selectors/index";
import { Breadcrumb } from "./Breadcrumb";

interface ConnectProps {
  value: number;
  isLoading: boolean;
  breadcrumbs: number[];
}
interface DispatchProps {
  increment: (amount: number) => void;
  delayIncrement: (amount: number) => void;
}

type Props = {} & ConnectProps & DispatchProps;

export class App extends React.PureComponent<Props> {
  render() {
    const { increment, delayIncrement, value, isLoading } = this.props;
    // const test = Server.getStuff().then(res => (
    //   <Breadcrumb values={res.filter(item => item > 0.5)} />
    // ));

    return (
      <>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Counter App</h1>
            </div>
          </div>
        </section>
        <section className="container">
          {/* {test} */}
          <Breadcrumb values={[1, 2, 3, 3]} />
          <div className="level">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Counter</p>
                <p className="title">{value}</p>
                {isLoading ? <span>Loading...</span> : null}
              </div>
            </div>
          </div>
          <div className="field is-grouped">
            <p className="control">
              <button
                className="button"
                id="increment-btn"
                onClick={() => increment(value)}
              >
                Click to increment
              </button>
            </p>
            <p className="control">
              <button
                className="button"
                id="delay-increment-btn"
                onClick={() => delayIncrement(value)}
              >
                Click to increment slowly
              </button>
            </p>
            <p className="control">
              <button className="button" id="remote-fetch-btn">
                Click to fetch server-side
              </button>
            </p>
          </div>
        </section>
      </>
    );
  }
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, any, RootAction>
): DispatchProps => {
  const { increment, delayIncrement } = counterActions;
  return {
    delayIncrement: (count: number) => dispatch(delayIncrement(count)),
    increment: (count: number) => dispatch(increment(count))
  };
};

const mapStateToProps = (state: RootState): ConnectProps => {
  const {
    counter: { value },
    loading: { isLoading }
  } = state;
  return {
    value,
    isLoading,
    breadcrumbs: filterBreadcrumbs(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
