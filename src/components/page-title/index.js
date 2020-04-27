import React, { Component } from 'react';

// style
import './index.scss'

export default class PageTitle extends Component {
    render() {
        return(
            <h1 className="page-title">{this.props.children}</h1>
        )
    }
}