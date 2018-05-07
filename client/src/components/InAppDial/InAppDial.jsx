import './InAppDial.scss';
import React, { Component } from 'react';
import { string } from 'prop-types';

class InAppDial extends Component {
  static propTypes = {
    name: string,
  };

  state = {
    showingDialer: false,
  };

  handleDial = () => {
    this.setState({ showingDialer: true });
  }

  handleEndCall = () => {
    this.setState({ showingDialer: false });
  }

  render() {
    const { showingDialer } = this.state;
    const { name } = this.props;

    return (
      <div className="in-app-dial">
        <div className="button" onClick={this.handleDial}>
          <i className="material-icons">call</i> Call {name}
        </div>
        { showingDialer && (
          <div className="dialer-overlay-window">
            <div className="dialer">
              <h1>Calling {name}</h1>
              <i className="material-icons" onClick={this.handleEndCall}>call_end</i>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default InAppDial;
