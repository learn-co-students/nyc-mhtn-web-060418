import React from 'react';

// Used in conjunction with withLoading if your component simply wants the
// all the keys returned from your fetch.
// This will destructure the expected initialData prop and then remove it
// before passing along all of your props to the WrappedComponent.
function withDestructuredLoading(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.destructuredProps = Object.assign(
        {},
        this.props,
        this.props.initialData,
      );
      delete this.destructuredProps.initialData;
    }

    render() {

      return <WrappedComponent {...this.destructuredProps} />
    }
  }
}

export default withDestructuredLoading;
