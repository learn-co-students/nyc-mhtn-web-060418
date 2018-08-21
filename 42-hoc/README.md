React Higher Order Component (HOC)
==================================

## Objectives

- Why? Some background:
  - Factory Pattern
  - Composition vs Inheritance
- Higher Order Functions
- Higher Order Components
- withRouter (LogoutButton)
- withAuth
- withLoading
- withAd

## Resources

- [Composition over Inheritance (Fun Fun Function)](https://www.youtube.com/watch?v=wfMtDGfHWpA)
- [Composition vs Inheritance (React Docs)](https://reactjs.org/docs/composition-vs-inheritance.html)

## Lecture Notes

### withRouter (LogoutButton)

[`withRouter` documentation](https://reacttraining.com/react-router/web/api/withRouter)

```javascript
import React from 'react';
import { withRouter } from 'react-router'
import Adapter from './Adapter';

const LogoutButton = ({ to = "/login", history }) => (
  <button
    className="logout-button"
    onClick={() => {
      Adapter.logout();
      history.push(to);
    }}
  >
    Logout
  </button>
)

export default withRouter(LogoutButton);
```

### withAuth

Think about what you want your `withAuth` to do. Do you want it to do:
- Redirects if no token exists?
- Validates a token if it exists?
- Passes along `userId` and `username` as props if token is valid?
- Redirects if the token is invalid?
- Anything else?

There are different kinds of auth HOCs you can write. It all depends on what you need it to do.

Below is a simple one that simply redirects you home if you're logged in. The use case for this is to stop users from going to routes like `/login` or `/register` when they are logged in.

```javascript
import React from 'react';
import Adapter from '../components/Adapter'

function withAuth(WrappedComponent) {
  return class extends React.Component {
    // Functionality #1
    // ================
    // We want every component that uses withAuth
    //   (aka: requires_login if we're thinking
    //   about how we named it in Rails)
    // to kick the user back to / if they are already
    // logged in.
    // This is for our LoginForm and RegistrationForm.
    componentDidMount() {
      // This is what we wrote in class.
      if(Adapter.isLoggedIn()) {
        console.log('redirect me!')
        this.props.history.push("/");
      }
    }
    // Functionality #2
    // ================
    // Try this on your own!
    //
    // Imagine we want to have a HOC, this one or another,
    // that protects pages that require logins.
    // So when visiting those pages, instead of pushing "/",
    // we instead push them to "/login".
    // How would you go about designing this???
    // Would you want to rename this HOC?

    render() {
      return (
        <WrappedComponent {...this.props} />
      )
    }
  }
}

export default withAuth;
```

### withLoading

Our `withLoading` can execute and run a loader to:
- Pass along `initialData` as a prop.

However, ask yourself if there's anything else you might want to do here. Are there any edge cases that we missed? Anything to make this more robust?

```javascript
import React from 'react';

// Explanation
// ===========
// Higher Order Components can take more than just another
// component as args/params.
// The common pattern we want to abstract in withLoading
// is the idea that we need to:
//     do a setState after a fetch in componentDidMount
// That's what we'll abstract away here and instead
// of rendering an empty array, we'll show a loading gif instead!

// To Test It
// ==========
// Throw a byebug in the controller actions for snacks and my snacks.
// While in byebug, we should see the loading GIF.
// If you then type `continue` in byebug to continue with the action,
// data should be sent back and we should see our loading component!

// dataLoader should be a Promise that we can run in componentDidMount.
// It's result is the data we will now pass down as props into
// our component. That way, the component can initialize state with
// data without ever having to render [] or do anything with componentDidMount.
function withLoading(WrappedComponent, dataLoader) {
  return class extends React.Component {
    state = {
      isLoading: true,  // Until this is flipped, we show the GIF.
      data: null,       // Eventual data we get back from dataLoader
    }

    // What we've now abstracted.
    componentDidMount() {
      dataLoader()
        .then(data => { // <-- Got our data back.
          this.setState({ data }, () => { // <-- Set our data.
             // In callback.
             // data is set, so let's flip the switch and render WrappedComponent
            this.isLoaded();
          });
        });
    }

    // Method to flip the switch.
    isLoaded = () => {
      this.setState({
        isLoading: false,
      })
    }

    render() {
      // Show a GIF while not loaded.
      if (this.state.isLoading) {
        // return <p>Spinny GIF</p>
        // I found a spinny gif!
        return <img alt="Spinny GIF" src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />
      } else {
        // If we get here, then this.state.data has something to pass down.
        // So we pass it down as a prop called initialData.
        // Every component that uses this HOC will get some initialData.
        return <WrappedComponent {...this.props} initialData={this.state.data} />
      }
    }
  }
}

export default withLoading;
```

### withAd

```javascript
import React, { Component } from 'react'
import Ad from '../components/Ad'

function withAd(WrappedComponent, trackedElements = ['DIV', 'A', 'BUTTON']) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.trackedElements = trackedElements;

      this.state = {
        clicks: 0,
  			showAd: false,
        x: 0,
        y: 0,
      }
    }

    toggleAd = () => {
  		this.setState({
  			showAd: !this.state.showAd
  		})
  	}

    adTracker = (x = 0, y = 0) => {
      this.setState({
        clicks: this.state.clicks + 1,
        x,
        y,
      })
    }

    componentDidUpdate(prevProps, prevState, snapshot){
  		if (this.state.clicks === 3 && !this.state.showAd) {
  			this.setState({
  				clicks: 0,
  				showAd: true
  			})
  		}
    }

    // onClick and onClickCapture both work; they just behave slightly differently
    // See:
    //   https://reactjs.org/docs/events.html#supported-events
    //   https://stackoverflow.com/questions/34522931/example-for-bubbling-and-capturing-in-react-js
    handleClickCapture = (event) => {
      // debugger;
      // console.log('tracking user actions', event.nativeEvent, event.target.tagName, event.target.nodeName, event.target.className);

      if (this.trackedElements.includes(event.target.nodeName)) {
        this.adTracker(event.nativeEvent.clientX / 2, event.nativeEvent.clientY / 2);
      }
    }

    renderAd = () => {
      if (this.state.showAd) {
        return <Ad toggleAd={this.toggleAd} x={this.state.x} y={this.state.y} />;
      }
      return null;
    }

    render(){
      return (
        <div onClickCapture={this.handleClickCapture}>
          {this.renderAd()}
          <WrappedComponent {...this.props} adTracker={this.adTracker} />
        </div>
      )
    }

    // If you want to fully replace the component with an ad (change Ad component styling too):
    // render(){
    //   if (this.state.showAd) {
    //     return <Ad toggleAd={this.toggleAd} />
    //   } else {
    //     return (
    //       <div onClickCapture={this.handleClickCapture}>
    //         <WrappedComponent {...this.props} adTracker={this.adTracker} />
    //       </div>
    //     )
    //   }
    // }
  }
}

export default withAd;
```

The accompanying `Ad.js` component:

```javascript
import React from 'react'

class Ad extends React.Component {
	state = {
		timeRemaining: 5,
	}

	componentDidMount(){
		this.beef = setInterval(() => {
			this.tick()
		}, 1000)
	}

	tick = () => {
		if (this.state.timeRemaining){
			this.setState({
				timeRemaining: this.state.timeRemaining - 1
			})
		} else {
			clearInterval(this.beef)
		}
	}

	render(){
		// console.log(this.state.timeRemaining)
		const adStyle = {
			position: 'absolute',
			left: this.props.x,
			top: this.props.y,
		};

		return (
			<div style={adStyle}>
				<iframe title="advertisement" height="200px" width="340px" src="https://www.youtube.com/embed/a8XC4H84rMU?autoplay=1" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
				<button onClick={this.props.toggleAd} disabled={this.state.timeRemaining}> { this.state.timeRemaining ? `Go back in ${this.state.timeRemaining} second(s)` : "Go back" }</button>
			</div>
		)
	}
}

Ad.defaultProps = {
	x: 0,
	y: 0,
};

export default Ad;
```
