import React, { Component } from 'react';
import './DropdownPage.css';
import NativeClickListener from './NativeClickListener';

class DropdownPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dropdownVisible: false
    }
  }

  // toggleDropdown = (syntheticEvent) => {
  //   console.log('toggle dropdown')
  //   // this.setState(prevState => ({dropdownVisible: !prevState.dropdownVisible}))
  //   this.setState({dropdownVisible: true})
  // }

  handleBodyClick = (syntheticEvent) => {
    console.log('body click')
  }

  renderDropdownMenu() {
    return (
      <div className='dropdown-body'
           onClick={this.handleBodyClick}>
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
          {/* <button onClick={this.toggleDropdown}> */}
          <button onClick={()=>this.setState({dropdownVisible: true})}>
            dropdown trigger
          </button>
        </div>
        {
          this.state.dropdownVisible &&
          <NativeClickListener onClick={()=>this.setState({dropdownVisible: false})}>
            { this.renderDropdownMenu() }
          </NativeClickListener>
        }
      </div>
    )
  }
}

export default DropdownPage;
