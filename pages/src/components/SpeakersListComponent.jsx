import {data} from '../../../SpeakerData.js';
import SpeakerComponent from "./SpeakerComponent";
import { useState } from 'react';

const SpeakersListComponent = ({showSessions}) => {



    const [speakersData,setSpeakersData] =useState(data);
    return(
        <div className="container speakers-list">
        <div className="row">
            {speakersData.map(function(speaker){
                const {id,first,last,company,bio,twitterHandle,favorite,sessions} = speaker; 
            return (
        <div key={id} className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
                    <SpeakerComponent speakerProps={speaker} showSessions={showSessions}/>
        </div>
            )} ) }
        </div>
    </div>
    );
}

export default SpeakersListComponent;