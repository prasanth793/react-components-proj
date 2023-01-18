import { useContext } from "react";
import {data} from "../../../SpeakerData";
import { SpeakerContext, SpeakerProvider } from "../contexts/SpeakerContext";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";
import SessionComponent from "./SessionComponent";
import SpeakerDelete from "./SpeakerDelete";

const SpeakerImageComponent = () => {

    const {speaker:{id,first,last}} = useContext(SpeakerContext);
    return(
        <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300 container-fluid">
                        <img 
                        className="contain-fit"
                        src={`/images/speaker-${id}.jpg`}
                        width="300"
                        alt={`${first} ${last}`}/>
                    </div>
    );
}

const SpeakerFavorite = () => {
    const {updateRecord,speaker:{favorite}} = useContext(SpeakerContext);
    const {speaker} = useContext(SpeakerContext)
    return(
        <div className="action padB1">
            <span onClick={()=>updateRecord({...speaker,favorite:!speaker.favorite})}>
                <i className={favorite===true?"fa fa-star orange":"fa fa-star-o orange"}/>
                {" "}Favourite{" "}
            </span>
        </div>
    )
}

const SpeakerInfoComponent = () => {
    //  const {} = speakerProps;
    const {speaker} = useContext(SpeakerContext);
    const {id,first, last, favorite,company,bio,twitterHandle} = speaker;
    return(
        <div className="speaker-info container-fluid">
                        <div className="d-flex justify-content-between mb-3">
                            <h3 className="text-truncate w-200">
                                {first} {last}
                            </h3>
                        </div>
                        <SpeakerFavorite/>
                        <div>
                            <p className="card-description">{bio}</p>
                            <div className="social d-flex flex-row mt-4">
                                <div className="company">
                                    <h5>Company</h5>
                                    <h6>{company}</h6>
                                </div>
                                <div className="twitter">
                                    <h5>Twitter</h5>
                                    <h6>{twitterHandle}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
    );
}


const SpeakerComponent = ({speaker,updateRecord,insertRecord,deleteRecord}) => {
    //const {id,first,last,company,bio,twitterHandle,favorite,sessions} = speakerProps;

    const {showSessions} = useContext(SpeakerFilterContext);
    return(
        <SpeakerProvider speaker={speaker} updateRecord={updateRecord} insertRecord={insertRecord} deleteRecord={deleteRecord}>
            <div className="container-fluid">
                <div className="card card-height p-4 mt-4">
                    <div>
                        <SpeakerImageComponent/>
                        <SpeakerInfoComponent />

                    </div>
                </div>
                <div>
                   {showSessions? <SessionComponent/> : null} 
                   <SpeakerDelete/>
                </div>
            </div>
        </SpeakerProvider>
    )
}

export default SpeakerComponent;