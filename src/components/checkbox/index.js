import React, { useState, useEffect } from 'react';

import './index.scss';



const Checkbox = ({ name, filtering, checked, children }) => {
    const [ check, setCheck ] = useState(checked);
    
    useEffect(() => {
        if( !filtering ) return;
        const archiveElements = document.querySelectorAll('.card.archive');
        archiveElements.forEach(el => {
            el.style.display = check ? 'block' : 'none';
        });
    }, [check]);

    return(
        <label className="checkbox">
            <input name={name} type="checkbox" className="checkbox__input" onChange={() => setCheck(!check)} defaultChecked={check}/>
            <span className="checkbox__text">{children}</span>
        </label>
    )
}

export default Checkbox;