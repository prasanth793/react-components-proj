import { createContext } from "react";
import useSpeakerList from "../hooks/useSpeakerList";
import { data } from "../../../SpeakerData";

const SpeakerListContext = createContext();

function SpeakerListProvider({children,speakersData}){

    const {initialData, setInitialData} = useSpeakerList(data);

    return(
        <SpeakerListContext.Provider value={{initialData,setInitialData}}>
            {children}
        </SpeakerListContext.Provider>
    )
}

export {SpeakerListContext,SpeakerListProvider}