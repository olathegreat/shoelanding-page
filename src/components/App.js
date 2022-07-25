import React from "react";
import HomePage from "./HomePage";
import Database from "./Database.js";
import UpIcon from "./UpIcon";



const App = () => {
    const data = Database;

        
            return(
                <div className="ui segment">
                   <HomePage disps={data}/>
                   <UpIcon/>
                </div>
            )
        
}

export default App;