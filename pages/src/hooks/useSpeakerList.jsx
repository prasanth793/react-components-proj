import { useState } from "react";

function useSpeakerList(speakersData=[]){
    const [initialData,setInitialData] = useState(speakersData);
    return {
            initialData,setInitialData
        }

}

export default useSpeakerList;
