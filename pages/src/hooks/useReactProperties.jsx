import { useState,useEffect, useContext, } from 'react';
import { SpeakerListContext } from '../contexts/SpeakerListContext';
import axios from 'axios';


export  const REQUEST_STATUS={
    LOADING:"loading",
    SUCCESS:"success",
    FAILED:"failed"
};

function useReactProperties(time,initialData) {
  //  const {initialData,setInitialData} = useContext(SpeakerListContext);
    const [status, setStatus] = useState(REQUEST_STATUS.LOADING)
    const [error,setError] = useState("");
    const [data,setData] =useState(initialData);

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve,ms));

    
 
    //const originalRecords = initialData;

    const baseUrl = "http://localhost:8080";

  
    useEffect(() => {
        async function myFunc(time){
            try{
               await delay(time);
          //   throw "Failed Loading"
          axios.get(`${baseUrl}/all`).then(res=>{
                console.log(res);
                setData(res.data);
                
            });

            console.log("data: " + data)
                setStatus(REQUEST_STATUS.SUCCESS)
                //setData(origRec);
            }
            catch(e){
                setStatus(REQUEST_STATUS.FAILED)
                setError(e);
            }
            

        } 
        myFunc(time);       
    },[]) //we are passing empty array as 2nd arg to useEffect to tell that the useEffect func should be called only once when it renders for the first time

    function updateRecord(record){

        const newRecords = data.map(function(rec){
            return rec.id===record.id?record:rec;
        });

        setData(newRecords)

        // async function delayFunc(){

        //     try{
        //         setData(newRecords);
        //         await delay(time);
        //         throw "Error:";
                
        //     }
        //     catch(e){
        //         console.log("Error: "+e);
        //         setData(originalRecords)

        //     }
            
        // }

        // delayFunc();

    }

    function insertRecord(record){

        axios({
            method: 'post',
            url: 'http://localhost:8080/speakers/create',
            data: {
                first: "Fred",
                last: "Routez",
                favorite: false,
                company: "CTS",
                twitterHandle: "amk_793"
            }
          });


    // const newData = [record,...initialData];
    //    setData(newData);

    }

    function deleteRecord(record){


        const newRecords = data.filter(function(rec){
            return rec.id!==record.id;
        });

        setData(newRecords);

    }

    return {
        status,error,data,updateRecord,insertRecord,deleteRecord
    }
}

export default useReactProperties;