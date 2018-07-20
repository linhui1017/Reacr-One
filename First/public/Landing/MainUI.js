import React, { Component } from 'react';
import MainHeader from './MainHeader';
import MainPanel from './MainPanel';
import 'semantic-ui-css/semantic.min.css';
import { FunctionType } from './SysConstants'
import { hot } from 'react-hot-loader';


class MainUI extends Component {
    static defaultProps = {
        serviceName: 'MainUI'

    }
    constructor(props, context) {
        super(props, context);

        this.state = {
            activeFn: FunctionType.OPD
        }
    }


    onFunctionChenge = (newFn, oldFn) => {
        this.setState({ activeFn: newFn });
        console.log('%c Fuction Change ', 'color: #F40000; font-size: 12px');
        console.log(newFn, 'to', oldFn);
        return;
    }

    onTouchStart = (e, a, b) => {
        return;
    }

    onClick = (e, a, b) => {
        return;
    }

    render() {
        const mainCSS = {
            'display': 'flex',
            'height': '100%',
            'flexDirection': 'column',
            'justifyContent': 'stretch'
        }


        const headerCSS = {
            'width': '100%',
            'height': '4em',
            'flex': '0'
        }

        const panelCSS = {
            'display': 'flex',
            'width': '100%',
            'flex': '1'
            // 'height': '100%'
        }

        let Events = {
            onTouchStart: this.onTouchStart,
            onClick: this.onClick
        };


        return (

            <div id='MainUI' style={mainCSS} {...Events} >

                <div style={headerCSS} >
                    <MainHeader activefn={this.state.activeFn} onChange={this.onFunctionChenge} />
                </div>

                <div style={panelCSS}>
                    <MainPanel activefn={this.state.activeFn} />
                </div>

            </div>

        );

    }


}

export default hot(module)(MainUI);