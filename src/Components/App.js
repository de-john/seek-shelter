
import React from 'react';
import ReactDOM from 'react-dom';
import Menu from "./Menu";
import Main from './Main';

class App extends React.Component {
    render() {
        return (
          <div className="defaultContainer">
            <Menu/>
            <Main/>
          </div>
        );
      }
}

export default App;