import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const useSelect = (initialValue) => {
    const [options, setOptions] = useState(initialValue);
    const SelectNoticias = ({ title, form, setForm }) => {
        const {select} = form;
        return <select    
            defaultValue={select}
            name="select"
            className="browser-default"
            onChange={(e) => { return setForm(e) }}
        >
            {
                title ? <option
                    value="0"
                    key="0"
                >
                    {title}
                </option> : null
            }
            {
                options.map(({ value, label }, index) => {
                    return <option
                        value={value}
                        key={index + 1}
                    >
                        {label}
                    </option>
                })
            }
        </select>
    }
    SelectNoticias.propTypes={
        title: PropTypes.string,
        setForm: PropTypes.func.isRequired
    }
    return ([
        SelectNoticias,
        setOptions
    ]);
}

useSelect.propTypes = {
    initialValue: PropTypes.array.isRequired
}