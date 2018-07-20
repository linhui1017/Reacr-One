import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IPBWorkList from './IPB/WorkList';
import ERWorkList from './ER/WorkList';
import { FunctionType } from './SysConstants'



class MainPanel extends Component {

    static propTypes = {
        activefn: PropTypes.object.isRequired
    };
   
    static defaultProps = {
        
        activefn : FunctionType.Default,
    }



    constructor(props, context) {
        super(props, context);
    }

    render() {

        const css = {
            'display': 'flex',
            'flexDirection': 'column',
            'justifyContent': 'stretch',
            'backgroundColor': '#cbedf2',
            'width': '100%',
         }


        let active = this.props.activefn;

        return (
            <div id='MainPanel' style={css}>

                {
                    (
                        () => {

                            if (active === FunctionType.EOPD) {
                                return <ERWorkList/>
                            }
                            else {
                                return <IPBWorkList/>
                            }
                        }
                    )()
                }

            </div>
        )




    }
}

export default MainPanel;