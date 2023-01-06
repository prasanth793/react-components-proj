import {data} from "../../../SpeakerData";


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
   return(
       <div className="sessionBox card h-250">
           <SessionsComponent  {...sessionsProps[0]}/>
       </div>
   );
}

const SessionComponent = ({sessionProps}) => {
    
    return(
        <SessionsListComponent sessionsProps = {sessionProps}/>
    );

}

export default SessionComponent;