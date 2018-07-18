import React, { Component } from 'react'
import { Menu, Icon, Button } from 'semantic-ui-react'
import { FunctionType } from './SysConstants'


class MainHeader extends Component {


  state = { activeA: FunctionType.IPB }

  handleAClick = (e, obj) => {
    obj.fn.Fn();
    this.setState({ activeA: FunctionType[obj.select] })
  }

  handleMenuClick = (e, data) => {
    console.log(1, e, data);
  }

  render() {

    const parentStyle = {
      'display': 'flex',
      'flexDirection': 'row',
      'width': '100%',
      'height': '100%',
      'backgroundColor': 'white',
      'justifyContent': 'center',
      'alignItems': 'center',
      'borderBottom': '1px solid',
      'borderBottomColor': '#000'
    }

    const memuCSS = {
      'width': 'auto',
      'height': 'auto',
      'marginLeft': 'auto',
 
    }

    const userCSS = {
      'width': 'auto',
      'height': 'auto',
      'margin': '10px',
      'marginLeft': 'auto',
      
    }

    const { activeA } = this.state;

    const aFn = new Object();
    aFn.Fn = function () { console.log(123, this) }.bind(this);

    return (
      <div style={parentStyle}>


        <div style={memuCSS}>
          <Menu>
            {
              Object.keys(FunctionType).map(item => {
                let one = FunctionType[item];
                if (one.IsFunction)
                  return (
                    <Menu.Item
                      select={item}
                      key={item}
                      name={one.Description}
                      active={activeA === one}
                      color={'yellow'}
                      onClick={this.handleAClick}
                      fn={aFn}
                    />
                  )
              })
            }


            <Menu.Item
              key='setting'
              name='設定' >
              <Icon name='setting' />
              設定
               </Menu.Item>


          </Menu>
        </div>

        <div style={userCSS}>
          <Button icon>
            <Icon name='user' />
            <span> 黃林輝 </span>
          </Button>
        </div>

      </div>
    )
  }
}

export default MainHeader;