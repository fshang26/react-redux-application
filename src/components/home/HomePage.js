import React from 'react';
import {Link} from 'react-router';

// TODO: (???) currently use class is because of hot reloading, can use stateless function component here.
class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>SF Administration</h1>
        <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg"> Learn more</Link>;
      </div>
    );
  }
}

export default HomePage;
