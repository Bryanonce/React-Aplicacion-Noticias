import {useState,useEffect} from 'react';

export const useFetch = (initialUrl)=>{
    const [url,setUrl] = useState(initialUrl);
    const [data,setData] = useState({});
    useEffect(()=>{
        fetch(url)
            .then((res)=>{
                return res.json()
            })
            .then((res)=>{
                return setData(res)
            })
    },[url])

    return [data,setUrl]
}