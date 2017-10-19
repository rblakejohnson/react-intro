import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import './Person.css';

// Just a function we can use...
const agePhrase = (age, noun) => age > 18 ? `I'm an old ${noun}.` : `I'm a young ${noun}.`;
// same as:
// var agePhrase = function(age, noun) {
//   if (age > 18) {
//     return 'I\'m an old ' + noun + '.';
//   } else {
//     return 'I\'m a young ' + noun + '.';
//   }
// };



// Our first stateless component - a function that takes props (data) and returns UI.
// Destructure the props we want - in the () on line 21.
// `props` is an object with 3 properties we want to use in our component name, age and likes
// Destructuring, in this case, allows us to use default params. Without destructing and default params we'd do:
// var location = props.location || 'Utah';
const Person = ({name, age, likes, location='Utah'}) => {
// same as:
// var Person = function(props) {
// but then inside the function we'd do `props.name`, `props.age` etc. and using `const` because we don't plan on reassigning Person.
   return (
      /* Using a template string in the `className`. Notice the backticks. Person.css with these classes imported above*/
      <div className={`person ${age > 18 ? 'old-person' : 'young-person'}`}>
        <h2>Hey, I'm {name}. I'm in {location}.</h2>
        <p>I like {
          /* map over the `likes` array and create a `<span>` for each item */
          likes.map((item, i, arr) => {
            return (
                /* React needs you put a unique key on each item so it can keep track of it in it's virtual DOM... */
                <span key={i}>
                  {item}{i < arr.length - 1 ? ', ' : null}
                </span>
              )
          })
        } etc.</p>
        {/* we can use functions etc. inside `{}` */}
        <p>{agePhrase(age, 'dude')}</p>
        {/* we can conditionally render things. Inspect the DOM and you want see this unless there are at least 4 likes */}
        {likes.length > 3
          ? <strong><em>Radical!</em></strong>
          : null
        }
      </div>
   );
};

// If we want to document what our Person props are then we can use PropTypes (imported on line 2)
Person.PropTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  likes: PropTypes.array.isRequired,
  location: PropTypes.string
};

// We could move Person into it's own file and import it for use in App...



/* This is the default component create-react-app gives you. It uses the es6 class syntax and is setup to have lifecycle methods and internal state. Our Person component has neither yet so we used the stateless component syntax */
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React, you guys!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {/* Our React component */}
        <Person name="Milo" age={6} likes={['sea creatures', 'dragons', 'insects']} />

        {/* Try adding another <Person/> with age over 18 or with `location` */}

      </div>
    );
  }
}

export default App;
