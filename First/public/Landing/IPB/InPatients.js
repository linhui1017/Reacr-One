import React, { Component } from 'react';
import {
    Grid,
    Menu,
  } from 'semantic-ui-react';

class InPatients extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {

        return (
            <Grid columns={3} doubling>
            <Grid.Column>
              <Menu
                items={[
                  { key: '1', name: 'link-1', content: 'Link' },
                  { key: '2', name: 'link-2', content: 'Link' },
                  { key: '3', name: 'link-3', content: 'Link' },
                ]}
                pointing
                secondary
              />
            </Grid.Column>
      
            <Grid.Column>
              <Menu
                items={[
                  { key: '1', name: 'link-1', content: 'Link' },
                  { key: '2', name: 'link-2', content: 'Link' },
                  { key: '3', name: 'link-3', content: 'Link' },
                ]}
                pointing
                tabular
              />
            </Grid.Column>
      
            <Grid.Column>
              <Menu
                items={[
                  { key: 'l1', name: 'link-1', content: 'Link' },
                  { key: 'l2', name: 'link-2', content: 'Link' },
                  { key: 't1', name: 'text-1', content: 'Right text', position: 'right' },
                ]}
                pointing
              />
            </Grid.Column>
          </Grid>

        )
    }
}

export default InPatients;