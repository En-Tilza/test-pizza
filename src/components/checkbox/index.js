import React, { Component } from 'react';

import './index.scss';


export default class Checkbox extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }
    onChange(event) {
        if( this.props.func )
            this.props.func(event.target.checked);
    }
    render() {
        const { name, children, checked } = this.props;

        return(
            <label className="checkbox">
                <input name={name} type="checkbox" className="checkbox__input" onChange={this.onChange} checked={checked} />
                <span className="checkbox__text">{children}</span>
            </label>
        )
    }
}