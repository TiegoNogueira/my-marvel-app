import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListItem from './components/ListItem';
 
class Item extends Component {
  state = {};
 
  render() {
    return (
      <React.Fragment>
        <ListItem/>
      </React.Fragment>
    );
  }
}

// ========================================

ReactDOM.render(
    <Item />,
    document.getElementById('root')
);