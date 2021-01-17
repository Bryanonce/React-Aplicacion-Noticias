import React from 'react';
//React Components
import {Formulario} from './components/Formulario/Formulario';
import {Header} from './components/Header/Header';
import {ListadoNoticias} from './components/ListadoNoticias/ListadoNoticias';
//Custom Hooks
import {useFetch} from './hooks/useFetch';
import {useForm} from './hooks/useForm';

export const NotiApp = ()=>{
    const [form,setForm] = useForm({});
    const {select} = form;
    const apiKey = "224a8dad982a44b6bc0d71d6c997c701";
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${select}&apiKey=${apiKey}`;
    const [{articles},setUrl] = useFetch(url);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUrl(`https://newsapi.org/v2/top-headlines?country=mx&category=${select}&apiKey=${apiKey}`);
        console.log(articles)
    }
    
    return (
        <>
            <Header 
                titulo="Buscador de Noticias"
            />
            <div className="container white">
                <Formulario handleSubmit={handleSubmit} form={form} setForm={setForm}/>
                <ListadoNoticias noticias={articles? articles:[]} />
            </div>
        </>
    );
}