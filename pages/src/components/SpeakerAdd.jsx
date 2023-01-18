

function SpeakerAdd({eventYear, insertRecord}){

    return(
        <a href="#" className="addSes">
            <i onClick={(e)=>{
                e.preventDefault();
                const firstLast = window.prompt("Enter the First and Last Name","");
                const firstLastArray = firstLast.split(' ');
                insertRecord({
                    id:"99999",
                    first: firstLastArray[0],
                    last: firstLastArray[1],
                    sessions: [
                        {
                            id: "88888",
                            title: `New Session for ${firstLastArray[0]}`,
                            room:{
                                name: "Main room"
                            },
                            eventYear
                        }
                    ]
                })
            }}>
                +
                </i>      
        </a>
    )

}

export default SpeakerAdd;