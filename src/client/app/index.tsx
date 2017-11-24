import * as React from 'react';
import {render} from 'react-dom';
import State from "./component/State";
import City from "./component/City";

interface IState {
    stateKey:string;
}

class App extends React.Component<{}, IState> {

    constructor() {
        super();
        this.state = {
            stateKey: "1"
        };
        this.handleStateChanged = this.handleStateChanged.bind(this);
    }

    handleStateChanged(stateKey: string):void {
        console.log(stateKey);
        this.setState({stateKey: stateKey});
    }

    render () {
        return (
            <div>
                <State onChange={this.handleStateChanged}/>
                <City stateKey={this.state.stateKey}/>
            </div>
        );
    }
}

render(<App />, document.getElementById('app'));