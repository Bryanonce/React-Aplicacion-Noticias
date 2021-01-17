import {useState,useEffect} from 'react';

export const useFetch = (initialUrl)=>{
    const [url,setUrl] = useState(initialUrl);
    const [data,setData] = useState({});
    useEffect(()=>{
        fetch(url,{
            method: 'GET',
            mode:'cors',
            // body: JSON.stringify(data),
            // headers :{
            //   'Content-Type': 'application/json',
            //   'Access-Control-Allow-Origin':'*'
            // },
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin':'*',
              'Access-Control-Allow-Headers':'Origin,Content-Type,Accept',
        
            }
          })
            .then((res)=>{
                return res.json()
            })
            .then((res)=>{
                return setData(res)
            })
    },[url])

    return [data,setUrl]
}