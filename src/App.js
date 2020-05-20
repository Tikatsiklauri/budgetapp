import React from 'react';
import './App.css';
import GoogleBtn from './GoogleBtn';
import {AuthRoute, ProtectedRoute} from './route_util';
import SlideTwo from './components/slide_two';
import ThirdSlide from './components/third_slide';
import {Switch} from 'react-router-dom';



function App() {
  return (
    <div className="App">
     <AuthRoute exact to="/" component={GoogleBtn}/>
     <Switch>
      <ProtectedRoute exact path="/slideTwo" component={SlideTwo}/> 
      <ProtectedRoute path="/thirdSlide" component={ThirdSlide} />
    </Switch>
   </div>
  );
}

export default App;
