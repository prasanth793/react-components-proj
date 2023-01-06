import Speakers from "./src/components/Speakers";
import Header from "./src/components/Header";
import SpeakersToolBar from "./src/components/SpeakersToolBar";
const IndexPage = () => {
   
    return(
        <div className="container-fluid">
            <Header/>
            <SpeakersToolBar/>
            <Speakers/>
        </div>
    );
}

export default IndexPage;