import React from 'react';

import Dropdown from 'components/Dropdown';
import Checkbox from 'components/Checkbox';

import './index.scss';


const Filters = props => {
    const { handlerFiltering } = props;
    const filterOption = [
        {
            name: 'by-abc',
            values: ['ASC', 'DESC'],
            initial: 'По алфавиту'
        },
        {
            name: 'by-date',
            values: ['ASC', 'DESC'],
            initial: 'По дате'
        },
        {
            name: 'by-order',
            values: ['Повар', 'Курьер', 'Официант'],
            initial: 'Должность'
        }
    ]


    const filtering = (target, value) => {
        handlerFiltering(target, value);
    }

    return (
        <div className="filters">
            {filterOption.map((options, index) =>
                <Dropdown values={options.values} name={options.name} title={options.initial} functionFiltering={filtering} key={index} />
            )}
            <Checkbox name={'isArchive'} filtering={true}>В архиве</Checkbox>
        </div>
    )
}



export default Filters;