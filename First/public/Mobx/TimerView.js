import React, { Component } from 'react';
import {observer} from 'mobx-react';
import {observable, action} from 'mobx'




@observer
class TimerView extends Component {
    static defaultProps = {
         appState:  observable ({
            timer: 0,
            resetTimer : action(function reset() {
                this.timer = 0;
            })
        })
      };
     
    constructor(props, context)
    {
        super(props, context);

        this.onReset = this.onReset.bind(this);

        setInterval(action(function tick() {
            this.props.appState.timer += 1;
            //this.forceUpdate();
        }.bind(this)), 1000);
    }

    
    render() {

        return (<button onClick={this.onReset}>
                Seconds passed: {this.props.appState.timer}
            </button>);
    }
    onReset () {
        //appState.resetTimer会在下一节完成
        this.props.appState.resetTimer();
    }
};






export default TimerView;
