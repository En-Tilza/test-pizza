import React, { useState } from 'react';


import './index.scss';

const Dropdown = ({ values, name, title, functionFiltering }) => {
    const [ open, setOpen ] = useState(false);
    const [ value, setValue ] = useState(title);


    const choose = (target, value) => {
        setValue(value);
        setOpen(false);

        if( functionFiltering ) functionFiltering(target, value);
    }

    return (
        <div className="custom-select">
            <input type="hidden" name={name} value={value}/>
            <button type="button" className="custom-select-header" onClick={() => {setOpen(prev => !prev)}}>
                <span className="custom-select-header__option">{value}</span>
            </button>

            <div className={open ? 'custom-select-dropdown open' : 'custom-select-dropdown'}>
                {values.map((element, index) => (
                    <div className="custom-select-dropdown__item" key={index}>
                        <a href="#dropdown" className="custom-select-dropdown__option" onClick={() => {choose(name, element)}}>{element}</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dropdown;
