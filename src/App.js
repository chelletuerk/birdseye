import React from 'react';
import './App.css';
import SignInSide from './SignInSide'
import Tasks from './Tasks'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/tasks" component={Task} />
      </div>
    </Router>
  )
}

function Login() {
  return <SignInSide/>
}

function Task() {
  return <Tasks/>
}


//   ``
// function Header() {
//   return (
//     <ul>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/about">About</Link>
//       </li>
//       <li>
//         <Link to="/topics">Topics</Link>
//       </li>
//     </ul>
//   );
// }


// function App() {
//   return (
//     <SignInSide/>
//   )
// }

export default App;
