import React, { Component } from 'react';

import './index.scss';


export default class Checkbox extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }
    onChange(event) {
        this.props.updateStore(event.target.checked)
    }
    render() {
        return(
            <label className="checkbox">
                <input type="checkbox" className="checkbox__input" onChange={this.onChange} />
                <span className="checkbox__text">{this.props.children}</span>
            </label>
        )
    }
}