# AUTHffice Hours™️

- General Auth Flow Walkthrough:

![scotch.io auth overview](https://cask.scotch.io/2014/11/tokens-traditional.png)

- [Error handling in Fetch](https://gist.github.com/odewahn/5a5eeb23279eed6a80d7798fdb47fe91)

- [React Environment Variables](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables)

- Why do I need a HOC? COMPOSITION––HOCs allow us to reuse logic like this instead of having to retype it in several different components:

```javascript
if (localStorage.getItem('jwt') && this.props.loggedIn) { //i have a token and i'm logged in
  return <WrappedComponent />
} else if (localStorage.getItem('jwt') && this.props.authenticatingUser) {
  return <Loader active inline="centered" />
} else {
  return <Redirect to="/login" />
}
```
