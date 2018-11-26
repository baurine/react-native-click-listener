import React, { Component } from 'react';
import './DropdownPage.css';

class DropdownPage1 extends Component {
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
    document.removeEventListener('click', this.globalClickListener)
  }

  globalClickListener = (nativeEvent) => {
    console.log('global click')
    // ignore click event happened inside the dropdown menu
    if (this._dropdown_body && this._dropdown_body.contains(nativeEvent.target)) return
    this.setState({dropdownVisible: false}, () => {
      document.removeEventListener('click', this.globalClickListener)
    })
  }

  toggleDropdown = (syntheticEvent) => {
    console.log('toggle dropdown')
    this.setState(prevState => ({dropdownVisible: !prevState.dropdownVisible}), () => {
      if (this.state.dropdownVisible) {
        document.addEventListener('click', this.globalClickListener)
      }
    })
  }

  handleBodyClick = (syntheticEvent) => {
    console.log('body click')
  }

  renderDropdownMenu() {
    return (
      <div className='dropdown-body'
           ref={ref=>this._dropdown_body=ref}
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

export default DropdownPage1;
