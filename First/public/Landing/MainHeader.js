import React, { Component } from 'react'
import { Menu, Icon, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import { FunctionType } from './SysConstants'


class MainHeader extends Component {

  static propTypes = {
      activefn: PropTypes.object.isRequired,
      onChange:PropTypes.func.isRequired

  };

  static defaultProps = {
      
      activefn : FunctionType.Default,
  }


  handleAClick = (e, obj) => {
   // console.log(123, FunctionType[obj.select]);
    this.props.onChange(FunctionType[obj.select], this.props.activefn);
    //this.setState({ activeA: FunctionType[obj.select] })

    const payload = { StationNO: '06A'}
  //作POST
  fetch('http://go.kfcc.intra/Gateway/ws/Vender/MedicusTek/SCDataTransfer.asmx/scGetNurseList',
   {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
   })
    .then((response) => {
     
      //ok 代表狀態碼在範圍 200-299
      // if (!response.ok) throw new Error(response.statusText)
       return response.json()
    })
    .then((item) => {
      console.log(item.d.NurseList);
    })
    .catch((error) => {
      //這裡可以顯示一些訊息
      //console.error(error)
    })
  }


  componentDidMount() {

  }

  handleTouchmove= (e) => {
      e = e || window.event;
      if (e.preventDefault) {
        e.preventDefault();
      }
      return false;
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


    // const aFn = new Object();
    // aFn.Fn = function () { console.log(123, this) }.bind(this);

    return (
      <div style={parentStyle} onTouchMove={this.handleTouchmove}>


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
                      active={this.props.activefn === one}
                      color={'yellow'}
                      onClick={this.handleAClick}
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