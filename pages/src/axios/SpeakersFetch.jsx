import axios from "axios";
import React from "react";

const api = axios.create(
{
    baseURL:`http://localhost:8080/all`
}
);


class SpeakersFetch extends React.Component{
    
    constructor(){
        super();
        api.get('/').then(res=>{
            console.log(res);
        })
    }
}

export default SpeakersFetch;