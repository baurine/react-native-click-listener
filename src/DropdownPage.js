import React, { Component } from 'react';
import './DropdownPage.css';

class DropdownPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dropdownVisible: false
    }
  }

  toggleDropdown = (e) => {
    this.setState(prevState => ({dropdownVisible: !prevState.dropdownVisible}))
  }

  handleBlur = (e) => {
    console.log('on blur')
    this.setState({dropdownVisible: false})
  }

  renderDropdownMenu() {
    return (
      <div className='dropdown-body' onBlur={this.handleBlur}>
        <div>
          <input type='checkbox'/><span>option 1</span>
        </div>
        <div>
          <input type='checkbox'/><span>option 2</span>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className='dropdown-container'>
        <div className='dropdown-trigger'>
          <button onClick={this.toggleDropdown}>
            dropdown trigger
          </button>
        </div>
        {
          this.state.dropdownVisible &&
          this.renderDropdownMenu()
        }
      </div>
    )
  }
}

export default DropdownPage;
