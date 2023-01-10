import Header from "./Header";
import SpeakersToolBar from "./SpeakersToolBar";
import { useState } from "react";
import SpeakersListComponent from "./SpeakersListComponent";

const App = () => {

    const [theme, setTheme] = useState("light");
    const [showSessions, setShowSessions] = useState(true);
    return(
    <div className={theme==="light"?"container-fluid light":"container-fluid dark"}>
        <Header/>
        <SpeakersToolBar theme={theme} setTheme={setTheme} showSessions={showSessions} setShowSessions={setShowSessions}/>
        <SpeakersListComponent showSessions={showSessions}/>
    </div>
    )
}

export default App;