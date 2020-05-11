import React, { Component } from 'react';

import './index.scss';

export default class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdown: '',
            select: ''
        }

        this.refSelect = React.createRef();

        this.dropdownToggle = this.dropdownToggle.bind(this);
        this.dropdownSelect = this.dropdownSelect.bind(this);
        this.windowEvent = this.windowEvent.bind(this);
    }

    dropdownToggle() {
        if( this.state.dropdown ) {
            this.setState({dropdown: ''});
        } else {
            this.setState({dropdown: 'open'});
            this.addClickOutside();
        }
    }

    dropdownSelect(event) {
        event.preventDefault();
        this.setState({
            dropdown: '',
            select: event.currentTarget.innerText
        })

        if( this.props.func )
            this.props.func(event.currentTarget.innerText, this.refSelect.current);
    }

    addClickOutside() {
        window.addEventListener('click', this.windowEvent);
    }

    removeClickOutside() {
        window.removeEventListener('click', this.windowEvent);
    }

    windowEvent(event) {
        if (!this.refSelect.current.contains(event.target)) {
            this.setState({dropdown: ''});
            this.removeClickOutside();
        }
    }

    render() {
        const { values, name, inputName } = this.props;

        return(
            <div className="custom-select" ref={this.refSelect}>
                <input type="hidden" name={inputName ? inputName : "select"} value={this.state.select}/>
                <button type="button" className="custom-select-header" data-selected={this.state.select} onClick={this.dropdownToggle}>
                    <span className="custom-select-header__option">{name}</span>
                </button>

                <div className={"custom-select-dropdown "+this.state.dropdown}>
                    {values.map((element, index) => (
                        <div className="custom-select-dropdown__item" key={index}>
                            <a href="#dropdown" className={this.state.select === element ? 'custom-select-dropdown__option active' : 'custom-select-dropdown__option'} onClick={this.dropdownSelect}>{element}</a>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}