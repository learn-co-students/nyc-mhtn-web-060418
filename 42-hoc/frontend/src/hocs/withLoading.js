import React, { Component } from 'react';

// Whatever component it's given:
// 1. it's going to show some fancy twirly bar thingy while the data is being fetched
//    (spinner gif)
// 2. once fetched, it's going to render the component with that data
//
// This is used for Snacks and MySnacks which have different fetches in componentDidMount
// url, body, headers, method => Adapter
export default function withLoading(WrappedComponent, loader) {
  return class extends Component {
    state = {
      data: null,
      isLoaded: false,
    }

    componentDidMount() {
      loader().then(json => {
        this.setState({
          data: json,
          isLoaded: true,
        });
      });
    }

    render() {
      if (this.state.isLoaded !== null) {
        return <WrappedComponent {...this.props} initialData={this.state.data} />
      } else {
        return <img alt="Spinny GIF" src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />
      }
    }
  }
}
