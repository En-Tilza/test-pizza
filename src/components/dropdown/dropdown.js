import React, { Component } from 'react';

// style
import './dropdown.scss';

export default class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.dropdownOptionSelect = this.dropdownOptionSelect.bind(this);
        this.dropdownOption = this.dropdownOption.bind(this);
        this.dropdownClose = this.dropdownClose.bind(this);
        this.dropdown = this.dropdown.bind(this);
    }
    dropdown(event) {
        event.preventDefault();
        let target = event.currentTarget;

        this.dropdownCloseOther(target.parentNode);

        let dropdown = target.parentNode.querySelector('.custom-select-dropdown');
        dropdown.classList.toggle('active');

        window.onclick = event => {
            if (!target.parentNode.contains(event.target)){
                this.dropdownClose();
            }
        }
    }
    dropdownOption(event) {
        event.preventDefault();
        let target = event.currentTarget;
    
        this.dropdownOptionSelect(target);
    }
    dropdownOptionSelect(option) {
        let selected = option.closest('.custom-select').querySelector('.custom-select-header');
        selected.querySelector('.custom-select-header__option').dataset.selected = option.innerText;

        this.test();

        this.dropdownClose();
    }
    dropdownClose() {
        let dropdowns = document.querySelectorAll('.custom-select-dropdown.active');
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        })
    }
    dropdownCloseOther(not) {
        let isActive = false;
        if( not.querySelector('.custom-select-dropdown').classList.contains('active') ) isActive = true;

        let dropdowns = document.querySelectorAll('.custom-select-dropdown.active');
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        })
        if( isActive ) not.querySelector('.custom-select-dropdown').classList.add('active');
    }
    test() {
        console.log(123)
    }
    render() {
        const { variables, orderby } = this.props;

        return(
            <div className="custom-select">
                <div className="custom-select-header" onClick={this.dropdown}>
                    <p className="custom-select-header__option" data-selected="">{orderby}</p>
                </div>

                <div className="custom-select-dropdown">
                    {variables ? 
                        <>
                            {variables.map((element, index) => (
                                <div className="custom-select-dropdown__item" key={index}>
                                    <a href="#dropdown" className="custom-select-dropdown__option" onClick={this.dropdownOption}>{element}</a>
                                </div>
                            ))}
                        </>
                    : null}
                </div>
            </div>
        )
    }
}