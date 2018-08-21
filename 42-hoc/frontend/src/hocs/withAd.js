import React, { Component } from 'react';
import Ad from '../components/Ad';

// Whatever component it's given:
// 1. keep track of user activity
// 2. then render an add when the user clicks 1
export default function withAd(WrappedComponent) {
  return class extends Component {
    state = {
      clicks: 0,
      x: 0,
      y: 0,
      showAd: false,
    }

    resetClicks = () => {
      this.setState({ clicks: 0, showAd: false });
    }

    renderAd = () => {
      if (this.state.showAd) {
        // this.setState({ clicks: 0 });
        return <Ad x={this.state.x} y={this.state.y} toggleAd={this.resetClicks} />
      }
      return null;
    }

    handleActivity = (event) => {
      console.log(event.nativeEvent);

      this.setState({
        clicks: this.state.clicks + 1,
        showAd: this.state.clicks + 1 === 1,
        x: event.nativeEvent.clientX,
        y: event.nativeEvent.clientY,
      })
    }

    render() {
      return (
        <div style={{ height: '100vh' }} onClick={this.handleActivity}>
          {this.renderAd()}
          <WrappedComponent {...this.props} />
        </div>
      )
    }

    // componentDidUpdate() {
    //   if (this.state.clicks === 1) {
    //     this.setState({ clicks: 0 });
    //   }
    // }
  }
}
