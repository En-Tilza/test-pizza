import React, { Component } from 'react';

import './index.scss'

export default class PageSection extends Component {
    render() {
        return(
            <section className="page">{this.props.children}</section>
        )
    }
}