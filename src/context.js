import React, {useState} from "react";

export const ThemeContext = React.createContext();

const ThemeProvider = (props) => {
    const [content, setContent] = useState("Who needs me again after manipulating value??");
    return (
        <ThemeContext.Provider value={{
            content
        }}
                               {...props}>

        </ThemeContext.Provider>
    )
};

export default ThemeProvider;