import React, { Component } from 'react';
import IPBWorkList from './IPB/WorkList';
import ERWorkList from './ER/WorkList';



class MainPanel extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {

        const css = {
            'width': '100%',
            'height': '100%',
            'backgroundColor': '#cbedf2'
        }
        let active = 'IPB';


        return (
            <div id='MainPanel' style={css}>
                {
                    (
                        () => {

                            if (active === 'ER') {
                                return <ERWorkList />
                            }
                            else {
                                return <IPBWorkList />
                            }
                        }
                    )()
               }
            </div>
        )




    }
}

export default MainPanel;