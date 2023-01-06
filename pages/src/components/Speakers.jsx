import {data} from '../../../SpeakerData.js';
import SpeakerComponent from "./SpeakerComponent";

const Speakers = () => {
    return(
        <div className="container speakers-list">
        <div className="row">
            {data.map(function(speaker){
                const {id,first,last,company,bio,twitterHandle,favorite,sessions} = speaker; 
            return (
        <div key={id} className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
                    <SpeakerComponent speakerProps={speaker}/>
        </div>
            )} ) }
        </div>
    </div>
    );
}

export default Speakers;