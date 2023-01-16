import React, {createContext } from "react";
import useSpeakerFilter from "../hooks/useSpeakerFilter"


 const SpeakerFilterContext = createContext();

function SpeakerFilterProvider({children,startingShowSessions=false,startingEventYear}){

    const {showSessions, setShowSessions,eventYear,setEventYear,searchQuery,setSearchQuery,EVENT_YEAR} = useSpeakerFilter(startingShowSessions,startingEventYear);


    return(
        <SpeakerFilterContext.Provider value={{showSessions,setShowSessions,eventYear,setEventYear,searchQuery,setSearchQuery,EVENT_YEAR}}>
            {children}
        </SpeakerFilterContext.Provider>
    )
}

export {SpeakerFilterProvider,SpeakerFilterContext};