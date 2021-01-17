import {useState} from 'react';
import PropTypes from 'prop-types';

export const useForm = (initialValue)=>{
    const [state,setState] = useState(initialValue);
    const handleForm = ({target})=>{
        const {name,value} = target;
        setState({
            ...state,
            [name]: value
        });
    }
    return [state,handleForm];
}

useForm.propTypes = {
    initialValue: PropTypes.object.isRequired
}