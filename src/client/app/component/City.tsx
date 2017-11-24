
import * as React from 'react';
import {cities} from '../mock-data';

interface IProps {
    stateKey: string;
}

class City extends React.Component<IProps, {}> {

    render() {
        let options = Object.keys(cities).map((sk:any) => {
            if (sk === this.props.stateKey) {
                return Object.keys(cities[sk]).map((ck:any) => {
                    return <option value={ck}>{cities[sk][ck]}</option>
                });
            } else {
                return null;
            }
        });

        return (
            <select>
                {options}
            </select>
        );
    }

}

export default City;