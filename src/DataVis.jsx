import React, { Component } from "react";
import  {CLASSES} from './CocoClasses.ts';
class DataVis extends Component {
    
    constructor(props){
        super(props);
    };  
    
    render() {
        //const {values, names}= this.state; 
        const detections = this.props.detections ; 

        const detectionTypes = detections
            .map(dataItem => dataItem.class) // get all media types
            .filter((name, index, array) => array.indexOf(name) === index); // filter out duplicates
        
        const counts = detectionTypes
        .map(classname => ({
            name: classname,
            count: detections.filter(item => item.class === classname).length
        }));
        
        return (
            <div>
                <h2>DATAVIS</h2>

                <div>
                    {counts.map((detections,index) => <p>{detections.name} : {detections.count}</p>)}
                </div>
            </div>
        )
    }
}

export default DataVis;