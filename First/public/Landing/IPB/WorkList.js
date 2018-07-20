import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import FlagExampleTable from './FlagExampleTable'


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
    const { activeIndex } = this.state;


    const mainCSS = {
      'display': 'block',
      'overflowY': 'scroll',
      'WebkitOverflowScrolling': 'touch'
      }

    return (
      <div style={mainCSS}>
        <FlagExampleTable />
      </div>
    )
  }
}

export default WorkList;


