import React from "react";
import "./index.css";

const Parent = () => {
    return (
        <div className="App">
            <FirstComponent content="Who needs me?"/>
        </div>
    )
}

const FirstComponent = ({content}) => {
    return (
        <div>
            <h3>I am the first component</h3>
            <SecondComponent content={content}/>|
        </div>
    );
}

const SecondComponent = ({content}) => {
    return (
        <div>
            <h3>I am the second component</h3>
            <ThirdComponent content={content}/>
        </div>
    );
}

const ThirdComponent = ({content}) => {
    return (
        <div>
            <h3>I am the third component</h3>
            <ComponentNeedingProps content={content}/>
        </div>
    );
}

const ComponentNeedingProps = ({content}) => {
    return <h3>{content}</h3>;
}

export default Parent;