import React from 'react';

const request = (
    { u : url,method = "GET"} :any,
    {query = {},header ={},body ={},signal ={} as any}
) :Promise<any> => 
new Promise(resolve => {
    const param = new URLSearchParams({
        ...query,
    });

    const i18nextLang = localStorage.getItem("i18_lang_key");
    if(i18nextLang){
        header.lang = i18nextLang;
    }

    if(!header.authorization){
        const accessToken = getAccessToken();
         if(accessToken){
            header.authorization = accessToken;
         }
    }
    fetch(`${apiEndPoint}${url}${Object.keys(query).length ? "?" : ""}${params}`,
    {
        method,body,
        headers : {
            "Content-Type" :"application/json",
            ...header,
        },signal,
    },
    ).
    then(res => {
        if(res.status < 400 ){
            res.json();
        }else if(res.status === 404 || res.status > 500){
            throw new Error(
                JSON.stringify({
                    message : "API not found",
                }),
            );
        }else{
               return res.json().then(e => {
                throw new Error(
                    JSON.stringify({
                        ...e,status: res.status,
                    }),
                );
               }); 
        }
    })
});


export default request;