//all of these React components are classes, so come in I-cap.

// load React. these two will always be here. The second one changes depending on what the project is . . . would be ReactNative if you were building a phone app. could say something about backend, too.
import React from 'react';
import ReactDOM from 'react-dom';

// Load components. these will change as you write different projects. could be login, users, messages, signup (like we did for chirp)
import App from './components/App';
import './index.css'; //this is unique to the react tool. css mashing. you can split your css up into individual components. and this will go through all of them individually and mash them together. He's not really used to this, but it is set up to do this.

//root is where it drops react into html. drops the app component into that one spot, and that's all it can do.  the app component can have multiple things in it, though.
ReactDOM.render(
  <App />,
  document.getElementById('root') // this goes to the HTML and sticks everything at that root variable.
);
