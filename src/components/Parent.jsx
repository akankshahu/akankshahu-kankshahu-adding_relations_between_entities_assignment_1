import React from "react";
import Child from "./Child";

const Parent=()=>{
    const data="Hello from Parent Component";

    return (
        <div>
            <h1>Parent Component</h1>
           <Child message={data}/>

        </div>
    );
};
export default Parent;
