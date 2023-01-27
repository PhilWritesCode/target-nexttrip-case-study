import './Selector.css';
import React from 'react';

class Selector extends React.Component {
    constructor(props) {
      super(props);
      this.onSelection = props.onSelection;
      this.change = this.change.bind(this);
    }
  
    change(event) {
      this.onSelection(event.target.value);
    }
  
    render() {
       this.props.options.unshift({id: "Select", display_name: "Select"});
       return(
          <div className='Selector-container'>
              <select className='selector' onChange={this.change} value={this.props.value}>
                 {
                  this.props.options.map((option) => {
                  return (<option key={option.id} value={option.id}>{option.display_name}</option>)
                })}
              </select>
          </div>
       );
    }
  };

  export default Selector;