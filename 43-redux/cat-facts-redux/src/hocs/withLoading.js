import React from 'react';

function withLoading(WrappedComponent, dataLoader) {
  return class extends React.Component {
    state = {
      isLoading: true,
      data: null,
    }

    componentDidMount() {
      dataLoader()
        .then(res => res.json())
        .then(data => {
          this.setState({ data }, () => {
            this.isLoaded();
          });
        });
    }

    isLoaded = () => {
      this.setState({
        isLoading: false,
      })
    }

    render() {
      if (this.state.isLoading) {
        return <img alt="Spinny GIF" src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />
      } else {
        return <WrappedComponent {...this.props} initialData={this.state.data} />
      }
    }
  }
}

export default withLoading;
