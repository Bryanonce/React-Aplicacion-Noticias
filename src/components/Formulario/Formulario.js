import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
//Import Styles
import styles from './Formulario.module.css';
//Custom Hook
import {useSelect} from '../../hooks/useSelect';

export const Formulario = ({form,setForm,handleSubmit})=>{
        
    const [SelectNoticias,setOptions] = useSelect([{}]);
    useEffect(()=>{
        const options = [
            {value: 'business', label:'Negocios'},
            {value: 'entertainment', label:'Entretenimiento'},
            {value: 'general', label:'General'},
            {value: 'health', label:'Salud'},
            {value: 'science', label:'Ciencia'},
            {value: 'sports', label:'Deporte'},
            {value: 'technology', label:'Tecnología'},
        ];
        setOptions(options)
    },[setOptions])
    
    return <div className={`${styles.buscador} row`}>
        <div className="col s12 m8 offset-m2">
            <form
                onSubmit={handleSubmit}
            >
                <h2 className={styles.heading}>Encuentra Noticias Por Categoria</h2>
                <SelectNoticias title="<--Seleccione la categoría-->" form={form} setForm={setForm}/>
                <input 
                    type="submit"
                    className={`btn-large amber darken-2 ${styles.btn_block}`}
                    value="Buscar"
                />
            </form>
        </div>
    </div>
}

Formulario.propTypes = {
    form: PropTypes.object.isRequired,
    setForm: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}