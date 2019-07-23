import * as React from "react";
import { connect } from "react-redux";
import "./App.css";
import { RootState } from "./redux/reducers";
import { counterActions, RootAction } from "./redux/actions";
import { ThunkDispatch } from "redux-thunk";

interface ConnectProps {
  counter: number;
}
interface DispatchProps {
  increment: (amount: number) => void;
  delayIncrement: (amount: number) => void;
}
interface ComponentState {
  isLoading: boolean;
}

type Props = {} & ConnectProps & DispatchProps;

export class App extends React.PureComponent<Props, ComponentState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }
  componentDidUpdate(prevProps: Props) {
    if (prevProps.counter !== this.props.counter) {
      this.setLoading(false);
    }
  }
  setLoading(loading: boolean) {
    this.setState({
      isLoading: loading
    });
  }
  render() {
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
          <div className="level">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Counter</p>
                <p className="title">{this.props.counter}</p>
                {this.state.isLoading ? <span>Loading...</span> : null}
              </div>
            </div>
          </div>
          <div className="field is-grouped">
            <p className="control">
              <button
                className="button"
                id="increment-btn"
                onClick={() => this.props.increment(this.props.counter)}
              >
                Click to increment
              </button>
            </p>
            <p className="control">
              <button
                className="button"
                id="delay-increment-btn"
                onClick={() => {
                  this.setLoading(true);
                  return this.props.delayIncrement(this.props.counter);
                }}
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
  return {
    delayIncrement: (count: number) =>
      dispatch(counterActions.delayIncrement(count)),
    increment: (count: number) => dispatch(counterActions.increment(count))
  };
};

const mapStateToProps = (state: RootState): ConnectProps => ({
  counter: state.counter.value
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
