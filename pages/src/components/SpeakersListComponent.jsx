import SpeakerComponent from "./SpeakerComponent";
import { useState,useEffect,useContext } from 'react';
import ReactPlaceHolder from 'react-placeholder';
import useReactProperties from '../hooks/useReactProperties'
import { REQUEST_STATUS } from '../hooks/useReactProperties';
import { data } from "../../../SpeakerData";
import { ThemeContext } from "../contexts/ThemeContext";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";


const SpeakersListComponent = () => {

    const {theme} = useContext(ThemeContext);

    const {searchQuery,eventYear} = useContext(SpeakerFilterContext);

    const {status,error,data:speakersData,updateRecord} = useReactProperties(3000, data);
   
    if(status===REQUEST_STATUS.FAILED){
        return (<div className='text-danger'>An Error has occured with message: {error}</div>)
    }

//    if(isLoading===true) return(<div>Is Loading.....</div>)


    return(
        <div className={theme==="dark"?"container-fluid dark speakers-list":"container-fluid light speakers-list"}>
            <ReactPlaceHolder type = "media" rows={15} className="speakerslist-placeholder" ready={status==REQUEST_STATUS.SUCCESS}>
                <div className="row">
                    {speakersData
                    .filter(function(speaker){
                        return speaker.first.toLowerCase().startsWith(searchQuery.toLowerCase()) 
                        || speaker.last.toLowerCase().startsWith(searchQuery.toLowerCase()) 
                    })
                    .map(function(speaker){
                    //console.log(speaker+"---");
                    return (
                        <div key={speaker.id} className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
                        <SpeakerComponent speakerProps={speaker} onFavoriteToggle={()=>updateRecord({...speaker,favorite:!speaker.favorite})}/>
                        </div>
                        )} ) }
                </div>
            </ReactPlaceHolder>
        </div>
        );
}

export default SpeakersListComponent;