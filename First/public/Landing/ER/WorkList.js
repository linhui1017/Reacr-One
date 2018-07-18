import React, { Component } from 'react';
import { Label, Menu, Tab } from 'semantic-ui-react'


const panes = [
    {
      menuItem: { key: 'users', icon: 'users', content: 'Users' },
      render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>,
    },
    {
      menuItem: (
        <Menu.Item key='messages'>
          Messages<Label>15</Label>
        </Menu.Item>
      ),
      render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
    },
  ]
  
class WorkList extends Component {
    constructor(props, context) {
        super(props, context);
    }

    state = { activeIndex: 0 }

    handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex })

    render() {
        const { activeIndex } = this.state
    
        return (
          <div>
            <Tab panes={panes} activeIndex={activeIndex} onTabChange={this.handleTabChange} />
          </div>
        )
      }
}

export default WorkList;

