1. What problem does the context API help solve?

It allows a mroe seamless approach to accessing state instead of having to drill down props

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions: functions that initialize a dispatch to the reducer.
reducers: functions that handle stateful logic and manipulation of data on the store
store: collection of memory and functions dedicated to getting/setting state on the global scope of the application

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

application state is state created at the highest component of the app. This state is accessible everyone on the app. Use cases typically include fetching API data if needed in multiple components

component state is state created at any component nested under app. This state is accessible to the component and any child component. Typical use cases include forms

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk allows you to keep the dispatch function 'alive' in the reducer. This allows for asyncronous functions to also set state inside reducers.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

react's useReducers combined with react's useContext hooks. It's the most integrated process that doesn't require any third party libraries that present the risk of breaking if outdated with react. 
these hooks also are very seamless as they have very little boilerplate required to enable them.