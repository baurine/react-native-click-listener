# NativeClickListener

A React helper component to listen the global native click event, can be used to implement the Dropdown menu easily.

## Description

### Implementation

    import React from 'react'
    import propTypes from 'prop-types'

    export default class NativeClickListener extends React.Component {
      static propsType = {
        listenInside: propTypes.bool,
        onClick: propTypes.func
      }

      static defaultProps = {
        listenInside: false
      }

      componentDidMount() {
        document.addEventListener('click', this.globalClickHandler)
      }

      componentWillUnmount() {
        document.removeEventListener('click', this.globalClickHandler)
      }

      globalClickHandler = (nativeEvent) => {
        const { onClick, listenInside } = this.props
        if (this._container &&
            this._container.contains(nativeEvent.target) &&
            !listenInside) return
        onClick(nativeEvent)
      }

      render() {
        return (
          <div ref={ref=>this._container=ref}>
            { this.props.children }
          </div>
        )
      }
    }

### Usage

    class DropdownPage extends Component {
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

Effect:

![](./notes/11.gif)

We even can dismiss the Dropdown menu by clicking a part of elements inside the menu.

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

Effect:

![](./notes/12.gif)

## Notes

- [How to implement a perfect React Dropdown component](./notes/implement-react-drop-down.md)

## Related Projects

- [react-dropdown](https://github.com/baurine/react-dropdown)
