import React from 'react';
import './App.css';
import GoogleBtn from './GoogleBtn';
import {AuthRoute, ProtectedRoute} from './route_util';
import SlideTwo from './components/slide_two';



function App() {
  return (
    <div className="App">
     <AuthRoute exact to="/" component={GoogleBtn}/>
     <ProtectedRoute exact to="/slideTwo" component={SlideTwo}/> 
   </div>
  );
}

export default App;
