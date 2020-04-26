import React, { Component } from 'react';
import { connect } from 'react-redux';

// style
import './dropdown.scss';

class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdown: '',
            select: ''
        }

        this.dropdownToggle = this.dropdownToggle.bind(this);
        this.dropdownSelect = this.dropdownSelect.bind(this);
    }
    dropdownToggle() {
        if( this.state.dropdown ) this.setState({dropdown: ''})
        else this.setState({dropdown: 'open'})
    }
    dropdownSelect(event) {
        event.preventDefault();
        this.setState({
            dropdown: '',
            select: event.currentTarget.innerText
        })

        this.props.updateStore();
    }
    render() {
        const { values, orderby } = this.props;

        return(
            <div className="custom-select">
                <button type="button" className="custom-select-header" data-selected={this.state.select} onClick={this.dropdownToggle}>
                    <span className="custom-select-header__option">{orderby}</span>
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



function mapStateToProps(state) {
    return {
        store: state
    }
}


export default connect(mapStateToProps)(Dropdown)