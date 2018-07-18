import React, { Component } from 'react';
import {Tab} from 'semantic-ui-react';


const panes = [
    { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
    { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  ]

  
class WorkList extends Component {
    constructor(props, context) {
        super(props, context);
    }

    state = { activeIndex: 1 }

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


