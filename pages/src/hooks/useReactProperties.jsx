import { useState,useEffect } from 'react';


export  const REQUEST_STATUS={
    LOADING:"loading",
    SUCCESS:"success",
    FAILED:"failed"
};

function useReactProperties(time,initialData) {
    const [status, setStatus] = useState(REQUEST_STATUS.LOADING)
    const [error,setError] = useState("");
    const [data,setData] =useState([]);

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve,ms));

    const originalRecords = initialData;

  
    useEffect(() => {
        async function myFunc(time){
            try{
                await delay(time);
          //   throw "Failed Loading"
                setStatus(REQUEST_STATUS.SUCCESS)
                setData(initialData);
            }
            catch(e){
                setStatus(REQUEST_STATUS.FAILED)
                setError(e);
            }
            

        } 
        myFunc(time);       
    },[]) //we are passing empty array as 2nd arg to useEffect to tell that the useEffect func should be called only once when it renders for the first time

    function updateRecord(updatedRecord){

        const newRecords = data.map(function(rec){
            return rec.id===updatedRecord.id?updatedRecord:rec;
        });

        async function delayFunc(){

            try{
                setData(newRecords);
                await delay(time);
                throw "Error:";
                
            }
            catch(e){
                console.log("Error: "+e);
                setData(originalRecords)

            }
            
        }

        delayFunc();

        // const speakerRecPrevious = data.find(function (rec){
        //     return rec.id === id;
        // });

        // const speakerRecUpdated = {...speakerRecPrevious,favorite:!speakerRecPrevious.favorite}

        // const speakerRecNew = speakersData.map(function (rec){
        //     return rec.id === id?speakerRecUpdated:rec
        // });

        // setSpeakersData(speakerRecNew);

    }

    return {
        status,error,data,updateRecord
    }
}

export default useReactProperties;