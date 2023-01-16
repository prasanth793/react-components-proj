import { useContext } from "react";
import {data} from "../../../SpeakerData";

import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";


const SessionsComponent = ({title,room}) => {
    //const {title,room} = sessionProps;
  //  const roomName = sessionProps.room.name;
   return(
                       <span className="session w-100">
                           <p>{title} <strong>Room: {room.name}</strong></p>
                       </span>
   )
}

function SessionsListComponent ({sessionsProps}) {
   // const {id,first,last,company,bio,twitterHandle,favorite,sessions} = sessionsProps;
   const {eventYear} = useContext(SpeakerFilterContext);
   return(
       <div className="sessionBox card h-250">
        {sessionsProps.filter(function(session){
            return session.eventYear === eventYear;
        }).map(function(session){
            return(
                <div className="session w-100" key={session.id}>
                <SessionsComponent  {...session}/>
                </div>
            )
        })}


           
       </div>
   );
}

const SessionComponent = ({sessionProps}) => {
    
    return(
        <SessionsListComponent sessionsProps = {sessionProps}/>
    );

}

export default SessionComponent;