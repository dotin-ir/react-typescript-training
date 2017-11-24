
import * as React from 'react';
import {states} from '../mock-data';


export interface IProps {
    onChange: (stateKey: string)=>void;
}

class State extends React.Component<IProps, {}> {

    handleChange(event: React.ChangeEvent<any>):void {
        this.props.onChange(event.target.value);
    }

    render() {

        let options = Object.keys(states).map((k:any) => {
           return <option value={k}>{states[k]}</option>
        });

        return (
            <select onChange={this.handleChange.bind(this)}>
                {options}
            </select>
        );
    }

}

export default State;