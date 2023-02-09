import Header from "./Header";
import Layout from "./Layout";
import SpeakersToolBar from "./SpeakersToolBar";
import { useState,createContext } from "react";
import SpeakersListComponent from "./SpeakersListComponent";
import { SpeakerFilterProvider } from "../contexts/SpeakerFilterContext";
import SpeakersFetch from "../axios/SpeakersFetch";



const App = () => {
  //  const [showSessions, setShowSessions] = useState(true);
    return(
        <Layout startingTheme="light">
            <SpeakerFilterProvider startingShowSessions={false} startingEventYear="2021">
                <Header/>
                <SpeakersToolBar/>
                <SpeakersListComponent />
            </SpeakerFilterProvider>
        </Layout>
    )
}

export default App;