import React, { Component } from 'react';
import MainHeader from './MainHeader';
import MainPanel from './MainPanel';
import 'semantic-ui-css/semantic.min.css';




class MainUI extends Component {
    static defaultProps =
        {
            serviceName: 'MainUI'

        }
    constructor(props, context) {
        super(props, context);
    }

    render() {
         const mainCSS = {
            'display': 'flex',
            'height': '100%',
            'flexDirection': 'column',
          }

          const headerCSS = {
            'width': '100%',
            'height': '4em',
          }

          const panelCSS = {
            'display': 'flex',
            'width': '100%',
            'height': '100%'
          }

        return (
            <div id='MainUI' style={mainCSS}>

                <div style={headerCSS}>
                    <MainHeader/>
                </div>
                
                <div style={panelCSS}>
                    <MainPanel/>
                </div>

            </div>

        );

    }


}

export default MainUI;