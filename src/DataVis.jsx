import React, { Component } from "react";

class DataVis extends Component {
    

    constructor(props){
        super(props);
     
    };

    
    render() {
        //const {values, names}= this.state; 
        const values = this.props.values ; 
        return (
            <div>
                <h2>DATAVIS</h2>

                {values.map((val, index) => <p>{val}</p>)}

            </div>
        )
    }

}

export default DataVis;
