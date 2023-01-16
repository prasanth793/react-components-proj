import { use, useState } from "react";

const useTheme = (startingTheme="light") => {

    const[theme,setTheme] = useState(startingTheme);

    function validateTheme(themeValue){
        if(themeValue==="light"){
            setTheme("light");
        }
        else if(themeValue==="dark"){
            setTheme("dark")
        }
    }

    return{
            theme,
            setTheme: validateTheme
        }

}

export default useTheme;