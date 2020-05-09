import React from 'react';

import './index.scss'

export default function PageWrapper(props) {
    return(
        <div className="page-wrapper">{props.children}</div>
    )
}