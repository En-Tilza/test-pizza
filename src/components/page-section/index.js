import React from 'react';

import './index.scss'

export default function PageSection(props) {
    return(
        <section className="page">{props.children}</section>
    )
}