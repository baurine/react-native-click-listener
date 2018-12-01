import React, { Component } from 'react';
import './DropdownPage.css';
import NativeClickListener from './NativeClickListener';

export default class DropdownPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dropdownVisible: false,
      dropdown2Visible: false
    }
  }

  render() {
    return (
      <div>
        <div className='dropdown-container' style={{float: 'left'}}>
          <div className='dropdown-trigger'>
            <button onClick={()=>this.setState({dropdownVisible: true})}>
              dropdown trigger (listen outside)
            </button>
          </div>
          {
            this.state.dropdownVisible &&
            <NativeClickListener
              onClick={()=>this.setState({dropdownVisible: false})}>
              <div className='dropdown-body'>
                <div>
                  <input type='checkbox'/><span>option 1</span>
                </div>
                <div>
                  <input type='checkbox'/><span>option 2</span>
                </div>
                <button onClick={()=>this.setState({dropdownVisible: false})}>
                  OK
                </button>
              </div>
            </NativeClickListener>
          }
        </div>
        <div className='dropdown-container' style={{float: 'left'}}>
          <div className='dropdown-trigger'>
            <button onClick={()=>this.setState({dropdown2Visible: true})}>
              dropdown trigger2 (listen inside)
            </button>
          </div>
          {
            this.state.dropdown2Visible &&
            <NativeClickListener
              listenInside={true}
              onClick={()=>this.setState({dropdown2Visible: false})}>
              <div className='dropdown-body'>
                <div>
                  <span>menu 1</span>
                </div>
                <div>
                  <span>menu 2</span>
                </div>
              </div>
            </NativeClickListener>
          }
        </div>
      </div>
    )
  }
}
