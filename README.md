# Namaste React 🚀

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - faster builds
- Image Optimization
- Minification
- Bundlings
- Compress
- Consistent Hashing
- Code Splitting
- Diffrential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Diffrent dev & prod bundles

#### Chunking
#### Code Splitting
#### Dynamic Bundling
#### Dynamic Import
#### Lazy Loading
#### On Demand Loading
- Break down the App into smaller logical chunks

# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector

# Setting up Testing in our APP
- Install react testing library
- Install jest
- Install Bebel dependencies of jest
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest Configuration (npx jest --init)
- Install jsdom library
- Install @babel/preset-react - to make JSX work in the test cases
- Include @babel/preset-react inside my local babel config.
- Install @testing-library/jest-dom

# JSX
- JSX is NOT html in JS. It is HTML like syntax.

# Component composition
- Merge multiple components into one component.

# Config Driven UI
- The UI is driven by the configs (data).

# How React works behind the scenes
- React uses reconciliation algorithm to update the DOM. (React DOM)
- React finds diffrence between virtual DOMs and updates only the changed part of the DOM.

# Higher Order Components
- A higher-order component (HOC) means, a function that takes a component and returns a new component.

# Pure Components
- A pure component is a component that does not re-render if the state and props are not changed.

# Controlled Components
- A controlled component is a component that does not have its own state. It is controlled by the parent component.

# Uncontrolled Components
- An uncontrolled component is a component that has its own state.

# Props drilling
- Passing props from parent to child to child to child and so on.

# Context
- Context is used to avoid props drilling.
- createContext = createContext(defaultValue)
- useContext = useContext(context)
- Provider = Wrap context.Provider to the parent component (functional) and pass value prop to it for providing the value to the children.
- Consumer = Wrap context.Consumer in class based components to use context value.
- contextType = Use contextType to consume the value in class components.

# Types of Routing in web apps
- Client Side Routing
- Server Side Routing

# Types of Testing (Developer)
- Unit Testing (Component Testing)
- Integration Testing (Component Integration Testing - Flow Testing)
- End to End Testing - E2E Testing (E2E UI Testing)

# Three Phases Of Testing
- Render
- Query - Search for elements
- Assertion