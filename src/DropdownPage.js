import React, { Component } from 'react';
import './DropdownPage.css';

class DropdownPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dropdownVisible: false
    }
  }

  // componentDidMount() {
  //   document.addEventListener('click', this.globalClickListener)
  // }

  componentWillUnmount() {
    // document.removeEventListener('click', this.globalClickListener)
    window.removeEventListener('click', this.globalClickListener)
  }

  globalClickListener = (nativeEvent) => {
    console.log('global click')
    this.setState({dropdownVisible: false}, () => {
      // document.removeEventListener('click', this.globalClickListener)
      window.removeEventListener('click', this.globalClickListener)
    })
  }

  toggleDropdown = (syntheticEvent) => {
    console.log('toggle dropdown')
    syntheticEvent.stopPropagation()
    this.setState(prevState => ({dropdownVisible: !prevState.dropdownVisible}), () => {
      if (this.state.dropdownVisible) {
        // document.addEventListener('click', this.globalClickListener)
        window.addEventListener('click', this.globalClickListener)
      }
    })
  }

  handleBlur = (syntheticEvent) => {
    console.log('on blur')
    this.setState({dropdownVisible: false})
  }

  handleBodyClick = (syntheticEvent) => {
    console.log('body click')
    console.log(syntheticEvent)
    console.log(syntheticEvent.nativeEvent)
    console.log(syntheticEvent.nativeEvent.path)
    syntheticEvent.stopPropagation()
  }

  renderDropdownMenu() {
    return (
      // <div className='dropdown-body' onBlur={this.handleBlur}>
      <div className='dropdown-body' onClick={this.handleBodyClick}>
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
        <button onClick={(e)=>e.stopPropagation()}>stop propagation</button>
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
