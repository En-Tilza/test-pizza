import React, { Component } from 'react';

import './index.scss';


export default class Checkbox extends Component {
    onChange = event => {
        let checked = event.target.checked;
        if( this.props.func )
            this.props.func(checked);
    }
    render() {
        const { name, children } = this.props;

        return(
            <label className="checkbox">
                <input name={name} type="checkbox" className="checkbox__input" onChange={this.onChange} defaultChecked={this.props.checked}/>
                <span className="checkbox__text">{children}</span>
            </label>
        )
    }
}