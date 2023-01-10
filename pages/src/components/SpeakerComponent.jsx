import {data} from "../../../SpeakerData";
import SessionComponent from "./SessionComponent";

const SpeakerImageComponent = ({id,first,last}) => {
    return(
        <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
                        <img 
                        className="contain-fit"
                        src={`/images/speaker-${id}.jpg`}
                        width="300"
                        alt={`${first} ${last}`}/>
                    </div>
    );
}

const SpeakerFavorite = ({favorite}) => {
    return(
        <div className="action padB1">
            <span>
                <i className={favorite===true?"fa fa-star orange":"fa fa-star-o orange"}/>
                {" "}Favourite{" "}
            </span>
        </div>
    )
}

const SpeakerInfoComponent = ({first,last,company,bio,twitterHandle,favorite}) => {
    //  const {} = speakerProps;
    return(
        <div className="speaker-info">
                        <div className="d-flex justify-content-between mb-3">
                            <h3 className="text-truncate w-200">
                                {first} {last}
                            </h3>
                        </div>
                        <SpeakerFavorite favorite={favorite}>
                            
                        </SpeakerFavorite>
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


const SpeakerComponent = ({speakerProps,showSessions}) => {
    const {id,first,last,company,bio,twitterHandle,favorite,sessions} = speakerProps;
    return(
        <div>
            <div className="card card-height p-4 mt-4">
                <div>
                    <SpeakerImageComponent {...speakerProps}/>
                    <SpeakerInfoComponent {...speakerProps}/>
                </div>
            </div>
            <div>
               {showSessions? <SessionComponent sessionProps={sessions}/> : null} 
            </div>
        </div>
        
        
    )
}

export default SpeakerComponent;