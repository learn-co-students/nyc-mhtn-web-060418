React Router
============

## SWBAT

- [ ] Create a multi-page web app
- [ ] Explain the advantages of using React Router
- [ ] Use `Link`, `Redirect`, and `history` to navigate pages
- [ ] Create dynamic routes

## Objectives

- [ ] Introduce React Router DOM and its documentation
- [ ] Discuss what React Router allows us to do
- [ ] Demonstrate a Route and explain the difference between the `render` and `component` props
- [ ] Demonstrate the use of `history`
- [ ] Demonstrate dynamic routing and URL params
- [ ] BONUS: Demonstrate nested routes

## Objectives

- Static vs Dynamic Routing
- HTML5 History API
- React Router API
  - BrowserRouter
  - Route
  - Link / NavLink
  - Switch
  - Redirect

## Lecture Notes

### Static vs Dynamic Routing

Server-side vs Client-side Routing.

- Client-side == no more request response.
- This results in a much faster/smoother feeling website.

**Why do we even need routes?**

- The user can use forward/back to navigate your app
- The user can navigate via urls
- We can make urls describe the action that the user might be taking
- Users can bookmark urls

**What are the drawbacks to client-side routing?**

- We're loading all of our frontend at once, so it might add to the initial load time
- We have to design all of our routes to be coupled with our component structure (which can be a good thing long-term)

### HTML5 History API

You can manipulate the URL in your browser with these:

```javascript
window.history.pushState({}, null, 'page');
window.history.back();
window.history.forward();
```

Combine that with `if/else` logic and tracking history and you get `react-router`.

### React Router API

> To get your intuition in line with React Router’s, think about components, not static routes. Think about how to solve the problem with React’s declarative composability because nearly every “React Router question” is probably a “React question”.
> [_source: React Router Philosophy_](https://reacttraining.com/react-router/web/guides/philosophy)

## Resources

- [HTML5 History API MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
- [React Router Github](https://github.com/ReactTraining/react-router)
- [React Router Website](https://reacttraining.com/react-router/)
- [Nested routes with React Router v4](https://tylermcginnis.com/react-router-nested-routes/)
- [`react-router`: difference between `component` and `render` props](https://stackoverflow.com/questions/48150567/react-router-difference-between-component-and-render)
