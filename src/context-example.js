import React, {useContext} from "react";
import "./index.css";
import {ThemeContext} from "./context";

const ParentWithContext = () => {
    return (
        <div className="App">
            <FirstComponent />
        </div>
    )
}

const FirstComponent = () => {
    return (
        <div>
            <h3>I am the first component</h3>
            <SecondComponent />|
        </div>
    );
}

const SecondComponent = () => {
    return (
        <div>
            <h3>I am the second component</h3>
            <ThirdComponent/>
        </div>
    );
}

const ThirdComponent = () => {
    return (
        <div>
            <h3>I am the third component</h3>
            <ComponentNeedingProps/>
        </div>
    );
}

const ComponentNeedingProps = () => {
    const {content} = useContext(ThemeContext);
    return <h3>{content}</h3>;
}

export default ParentWithContext;