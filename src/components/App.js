// This component handles the App template used on every page.
// We need a parent component that houses any markup that we want to display on every page, such as a header or a footer. Typically call this component App.js, but you could call it template or layout if you prefer.
import React, {PropTypes} from 'react';
import Header from './common/Header';

class App extends React.Component {
  render () {
    // React Router will be passing child components as properties onto our app component, and tehn they will composed right here on the page;
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
